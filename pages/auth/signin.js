import {getProviders, signIn as SignIntoProvider} from "next-auth/react";

function signIn({providers}) {
    return (
       <>
       <Header />
       <div>
           <img className='w-80' src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png" alt=''/>
        <div className="mt-40">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="p-3 bg-blue-500 rounded-full text-white"
                                onClick={() => SignIntoProvider(provider.id)}>
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