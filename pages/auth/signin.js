import {getProviders, signIn as SignIntoProvider} from "next-auth/react";
import Header from "../../components/Header";

function signIn({providers}) {
    return (
       <>
       <Header />
       <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center">
           <img className='w-80' src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png" alt=''/>
        <div className="mt-40">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="p-3 bg-blue-500 rounded-full text-white hover:shadow-lg font-semibold"
                                onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
       </div>
       </>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}

export default signIn;