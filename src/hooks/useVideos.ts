
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Video } from '@/types/Video';

export const useVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedVideos: Video[] = data.map(video => ({
        id: video.id,
        title: video.title,
        description: video.description,
        videoUrl: video.video_url,
        theme: video.theme,
        thumbnail: video.thumbnail || '',
        createdAt: new Date(video.created_at)
      }));

      setVideos(formattedVideos);
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addVideo = async (videoData: Omit<Video, 'id' | 'createdAt'>) => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .insert({
          title: videoData.title,
          description: videoData.description,
          video_url: videoData.videoUrl,
          theme: videoData.theme,
          thumbnail: videoData.thumbnail
        })
        .select()
        .single();

      if (error) throw error;

      const newVideo: Video = {
        id: data.id,
        title: data.title,
        description: data.description,
        videoUrl: data.video_url,
        theme: data.theme,
        thumbnail: data.thumbnail || '',
        createdAt: new Date(data.created_at)
      };

      setVideos(prev => [newVideo, ...prev]);
      return { success: true };
    } catch (error) {
      console.error('Erro ao adicionar vídeo:', error);
      return { success: false, error };
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return { videos, loading, addVideo, refetch: fetchVideos };
};
