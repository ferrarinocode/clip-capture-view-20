
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Video } from '@/types/Video';

interface VideoModalProps {
  video: Video;
  embedUrl: string;
  onClose: () => void;
}

const VideoModal = ({ video, embedUrl, onClose }: VideoModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
            {video.title}
          </DialogTitle>
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {video.theme}
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Sobre este vídeo</h3>
            <p className="text-gray-600 leading-relaxed">
              {video.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
