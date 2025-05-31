'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Volume2Icon, VolumeXIcon } from 'lucide-react';

export default function MusicPlayer() {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log('Audio element initialized');

    const handleCanPlay = () => {
      console.log('Audio can play');
      setIsLoading(false);
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      setIsLoading(false);
      setIsPlaying(false);
      setError('Failed to load audio');
    };

    const handlePlay = () => {
      console.log('Audio started playing');
      setIsPlaying(true);
      setMuted(audio.muted);
    };

    const handlePause = () => {
      console.log('Audio paused');
      setIsPlaying(false);
    };
    
    const handleLoadStart = () => {
        console.log('Audio loading started');
        setIsLoading(true);
        setError(null);
    };

    const handleLoadedData = () => {
      console.log('Audio data loaded');
    };
    
    const handleVolumeChange = () => {
      console.log('Volume changed, muted state:', audio.muted);
      setMuted(audio.muted);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('volumechange', handleVolumeChange);

    audio.load();

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('volumechange', handleVolumeChange);
    };
  }, []);

  const handleIconClick = async () => {
    if (!audioRef.current || isLoading) return;
    
    console.log('Icon clicked. Current isPlaying:', isPlaying);
    
    try {
      if (!isPlaying) {
        console.log('Attempting to play...');
        await audioRef.current.play();
      } else {
        console.log('Attempting to toggle mute...');
        audioRef.current.muted = !audioRef.current.muted;
      }
    } catch (err) {
      console.error('Playback or mute toggle failed:', err);
    }
  };

  return (
    <div className="w-full bg-background/80 backdrop-blur-sm px-4 py-2 flex items-center justify-center space-x-4 top-0 z-40">
      {/* 1) Album Cover */}
      <div className="w-12 h-12 relative rounded-lg overflow-hidden">
        <Image
          src="/Fountains.jpg"
          alt="Album Cover"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* 2) Song Title */}
      <p className="text-foreground font-light text-sm md:text-base italic font-cedarville">
        Fontaines D.C. - Starburster
      </p>

      {/* 3) Audio Control Icon Button (Play on first click, then Mute/Unmute)*/}
      <button
        onClick={handleIconClick}
        className="ml-4 text-foreground p-2 rounded-full hover:bg-gray-800 transition"
        aria-label={muted ? 'Unmute audio' : 'Mute audio'}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
        ) : (
          muted ? <VolumeXIcon size={20} /> : <Volume2Icon size={20} />
        )}
      </button>

      {/* 4) Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        loop 
        src="/Fontaines D.C. - Starburster - David Dean Burkhart.mp3"
        preload="auto"
        crossOrigin="anonymous"
        playsInline
      />
    </div>
  );
} 