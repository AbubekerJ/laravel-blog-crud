import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 min-h-screen flex flex-col items-center">
                <header className="w-full bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-blue-600">
                            BlogApp
                        </h1>
                        <nav className="space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('todos.index')}
                                    className="text-gray-700 hover:text-blue-600"
                                >
                                    Blogs
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-700 hover:text-blue-600"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="text-white bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-500"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <section className="flex-1 flex items-center justify-center bg-blue-50\\ w-full">
                    <div className="text-center max-w-3xl px-6">
                        <h2 className="text-4xl font-bold text-blue-700">
                            Welcome to BlogApp
                        </h2>
                        <p className="text-gray-600 text-lg mt-4">
                            Share your thoughts
                          
                        </p>
                        <div className="mt-6">
                            <Link
                                href={auth.user ? route('todos.index') : route('register')}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>

                <footer className="w-full bg-gray-100 py-4">
                    <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
                        Built with Laravel {laravelVersion} and PHP {phpVersion}. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
