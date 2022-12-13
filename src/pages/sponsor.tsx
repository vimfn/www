import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyPage() {
  const router = useRouter();

  // redirect to another website after the component has mounted
  useEffect(() => {
    router.push('https://www.buymeacoffee.com/arunava');
  }, []);

  return <div className='nsfw capitalize'>You are awesome 🥰...</div>;
}

export default MyPage;
