'use client';
import { motion } from 'framer-motion';
import MotionWrap from '../shared/MotionWrap';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const PitchSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isControlsVisible, setIsControlsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };
    
    const handleDurationChange = () => {
      setDuration(video.duration);
    }

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (video) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const newTime = (x / width) * duration;
        video.currentTime = newTime;
        setProgress((newTime / duration) * 100);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <MotionWrap className="text-center bg-background pb-0">
          <motion.div 
              className="relative z-[2] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
          >
              <h2 className="font-headline text-5xl md:text-7xl lg:text-h1 text-foreground">
                  THE PITCH
              </h2>
          </motion.div>
      </MotionWrap>
      <MotionWrap 
        className="text-center bg-background !py-0 max-w-none"
        onMouseEnter={() => setIsControlsVisible(true)}
        onMouseLeave={() => { if (isPlaying) setIsControlsVisible(false) }}
      >
          <div className="relative w-full h-[60vh] md:h-screen flex items-center justify-center group">
              <video
                  ref={videoRef}
                  src="/pitch-video.mp4"
                  playsInline
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlayPause}
              />
              <div className={cn(
                  "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
                  isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                )}
                onClick={togglePlayPause}
              >
                {!isPlaying && (
                    <button className="bg-primary/80 text-primary-foreground rounded-full p-4 hover:bg-primary transition-colors">
                        <Play className="w-12 h-12" />
                    </button>
                )}
              </div>
              <div 
                className={cn(
                    "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300",
                    isControlsVisible ? 'opacity-100' : 'opacity-0'
                )}
              >
                <div className="w-full bg-white/20 h-1 rounded-full cursor-pointer mb-2" onClick={handleProgressClick}>
                    <div className="bg-primary h-full rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                        <button onClick={togglePlayPause}>
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                        </button>
                        <button onClick={toggleMute}>
                            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className="text-sm font-mono">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                </div>
              </div>
          </div>
      </MotionWrap>
    </>
  );
};

export default PitchSection;
