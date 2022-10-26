import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = data?.count;
  
  const { data: issueData } = useSWR('/api/issues', fetcher);
  const issues = issueData?.issues;

  const subscribeMe = async (event) => {
    event.preventDefault();
    console.log(email);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
    });

    const { error, message } = await res.json();
    setError(error);
    setSuccess(message);
  };

  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <>  
      <div className="border border-gray-200 rounded p-6 my-4 w-full bg-gray-50">
        <p className="text-gray-900 dark:text-gray-200 mb-6 text-lg md:text-xl">
          Want to keep your brain engaged with great UI/UX learning content?
        </p>
        <p className="text-gray-800 dark:text-gray-400 mb-10 text-base">
          Enter your email address and you willl be be added to my email newsletter, of which you can opt out any time.
        </p>
        <form className="relative my-4" onSubmit={subscribeMe}>
          <input
            onChange={changeEmail}
            aria-label="Email for newsletter"
            placeholder="john@email.com"
            type="email"
            autoComplete="email"
            required
            className="py-4 px-0 text-md bg-transparent w-9/12 text-gray-900 border-b-2 border-gray-600 dark:border-gray-400 dark:text-white focus:border-brand focus-visible:outline-none"
          />
          <button
            className="flex justify-center px-5 py-4 mt-8 bg-green-600 text-white font-bold text-lg"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {success 
          ? <span className="flex items-center text-sm font-bold text-green-700">{success}</span> 
          : <span className="flex items-center text-sm font-bold text-red-800">{error}</span>}
        <p className="text-xl text-gray-800 dark:text-gray-200">
          { subscriberCount } subscribers . {issues && issues.length} {issues && issues.length > 1 ? 'issues' : 'issue'}
        </p>
        <p className="text-sm  text-center p-3 text-gray-800">
          Well, you can subscribe to my upcoming Newsletter for real. Just give a valid email id above and verify 😀.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
              Published Issues
        </h3>
        <div className="flex flex-col bg-gray-200 p-4 underline">
          <ul>
            {issues && issues
              .sort(
                (a, b) =>
                  Number(new Date(b.publishedAt)) -
                  Number(new Date(a.publishedAt))
              )
              .map((issue, index) => (
                
                <a key={index} href={issue.url} target="_blank" rel="noopener norefer noreferrer"> {issue.title} </a>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Subscribe;