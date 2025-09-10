// Components
import PasswordResetLinkController from '@/actions/App/Http/Controllers/Auth/PasswordResetLinkController';
import { login } from '@/routes';
import { Form, Head, Link } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <Head title="Olvidé mi Contraseña - EduStream" />
            
            {/* EduStream Header */}
            <header className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-green-500 md:h-12 md:w-12">
                            <svg className="h-6 w-6 text-white md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-white md:text-3xl">
                            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Edu</span>
                            <span className="text-white">Stream</span>
                        </span>
                    </Link>
                </div>
            </header>

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
            <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            {/* Main Content */}
            <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    {/* Forgot Password Form Container */}
                    <div className="rounded-xl bg-slate-800/90 p-8 shadow-2xl backdrop-blur-sm border border-slate-700/50">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2">Olvidé mi Contraseña</h1>
                            <p className="text-slate-300">Ingresa tu correo para recibir un enlace de restablecimiento</p>
                        </div>

                        {/* Status Message */}
                        {status && (
                            <div className="mb-6 rounded-lg bg-green-900/50 border border-green-600 p-3 text-sm text-green-200">
                                {status}
                            </div>
                        )}

                        <Form {...PasswordResetLinkController.store.form()} className="space-y-6">
                            {({ processing, errors }) => (
                                <>
                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <Input 
                                            id="email" 
                                            type="email" 
                                            name="email" 
                                            autoComplete="off" 
                                            autoFocus 
                                            placeholder="Correo electrónico" 
                                            className="h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Send Reset Link Button */}
                                    <Button 
                                        type="submit"
                                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl" 
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                                Enviando enlace...
                                            </>
                                        ) : (
                                            'Enviar Enlace de Restablecimiento'
                                        )}
                                    </Button>

                                    {/* Back to Login Link */}
                                    <div className="text-center">
                                        <span className="text-slate-400">O, regresa a </span>
                                        <TextLink 
                                            href={login()} 
                                            className="text-blue-400 hover:text-green-400 hover:underline font-medium transition-colors"
                                        >
                                            iniciar sesión
                                        </TextLink>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center text-sm text-slate-500">
                        <p>Esta página está protegida por Google reCAPTCHA para asegurar que no eres un bot.</p>
                        <p className="mt-2 text-xs text-slate-600">
                            EduStream - Tu plataforma de aprendizaje en línea
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
