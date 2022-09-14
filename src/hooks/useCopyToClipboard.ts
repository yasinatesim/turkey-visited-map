import { useCallback } from 'react';
import toast from 'react-hot-toast';

const useCopyToClipboard = () => {
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      toast.success('Copied to clipboard');
    } catch (err) {
      console.error(err);
      toast.error(`Failed to copy to clipboard: ${err}`);
    }
  }, []);

  return { copyToClipboard };
};

export default useCopyToClipboard;
