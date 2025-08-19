'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Loader2, Copy } from 'lucide-react';
import { suggestSectionSummary } from '@/ai/flows/suggest-section-summary';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '../ui/textarea';

type SummarySuggesterProps = {
  originalText: string;
};

export default function SummarySuggester({ originalText }: SummarySuggesterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const { toast } = useToast();

  const handleSuggest = async () => {
    setIsLoading(true);
    setSuggestion('');
    try {
      const result = await suggestSectionSummary({ sectionText: originalText });
      setSuggestion(result.suggestedSummary);
    } catch (error) {
      console.error('Error suggesting summary:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate summary.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (suggestion) {
      navigator.clipboard.writeText(suggestion);
      toast({
        title: 'Copied!',
        description: 'The suggested summary has been copied to your clipboard.',
      });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-4 right-4 z-10"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(true)}
          aria-label="Suggest a summary"
          className="rounded-full shadow-lg"
        >
          <Wand2 className="h-4 w-4" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Refine Summary</DialogTitle>
            <DialogDescription>
              Use AI to generate a more concise and impactful summary of the section content.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <h4 className="font-medium">Original Text</h4>
              <p className="text-sm text-muted-foreground p-4 bg-muted/50 rounded-md max-h-40 overflow-y-auto">
                {originalText}
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="font-medium">Suggested Summary</h4>
              {isLoading ? (
                <div className="flex items-center justify-center p-8 rounded-md border border-dashed h-40">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : suggestion ? (
                <Textarea readOnly value={suggestion} className="h-40"/>
              ) : (
                 <div className="flex items-center justify-center h-40 rounded-md border border-dashed">
                    <p className="text-sm text-muted-foreground">Click "Generate" to see the suggestion.</p>
                 </div>
              )}
            </div>
          </div>
          <DialogFooter>
            {suggestion && !isLoading && (
              <Button variant="ghost" onClick={handleCopy}>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
            )}
            <Button onClick={handleSuggest} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {suggestion ? 'Regenerate' : 'Generate'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
