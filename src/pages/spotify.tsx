import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyPage() {
  const router = useRouter();

  // redirect to another website after the component has mounted
  useEffect(() => {
    router.push('https://open.spotify.com/user/zfu9cur8fpnw6oc4q8vm55op6');
  }, []);

  return <div className='nsfw'></div>;
}

export default MyPage;
