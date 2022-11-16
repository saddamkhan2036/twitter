import { getProviders, signIn } from "next-auth/react";
export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/share-post-on-social-media-5295896-4412913.png"
        alt="postIt image inside a phone"
        className="hidden object-cover md:w-50 md:h-80 rotate-6  md:inline-flex"
      />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}  className="flex flex-col items-center">
            <img
              className="w-36 object-cover"
              src="https://cdn4.vectorstock.com/i/thumb-large/65/03/letter-p-blue-icon-logo-concept-design-vector-24016503.jpg"
              alt="Post logo"
            />
            <p className="text-center text-sm italic my-10">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: {
        providers,
      },
    };
  }
