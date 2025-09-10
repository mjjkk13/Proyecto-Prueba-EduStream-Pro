import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { BookOpen, PlayCircle, Award, Star, Target, CheckCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Mi Aprendizaje',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Mi Aprendizaje - EduStream" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
                {/* Welcome Section */}
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold mb-2">¡Hola! 👋</h1>
                            <p className="text-blue-100">¿Listo para continuar aprendiendo hoy?</p>
                        </div>
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="rounded-xl bg-white dark:bg-slate-800 p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Cursos Activos</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">3</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-white dark:bg-slate-800 p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Completados</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">7</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-white dark:bg-slate-800 p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Certificados</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">4</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-white dark:bg-slate-800 p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                                <Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Racha Actual</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">5 días</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Continue Learning */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Current Course */}
                        <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Continúa donde lo dejaste</h2>
                                <span className="text-sm text-slate-500 dark:text-slate-400">Última vez: hace 2 horas</span>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-700">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-green-500">
                                        <PlayCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-slate-900 dark:text-white">JavaScript Moderno</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Lección 5: Async/Await</p>
                                        <div className="mt-2 w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{width: '33%'}}></div>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">5 de 15 lecciones completadas</p>
                                    </div>
                                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 text-sm font-medium">
                                        Continuar
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* My Courses */}
                        <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Mis Cursos</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">React Fundamentals</h3>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">2 de 8 lecciones</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1.5">
                                        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full" style={{width: '25%'}}></div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">HTML & CSS</h3>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">Completado</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1.5">
                                        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full" style={{width: '100%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Today's Goal */}
                        <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Meta de Hoy</h2>
                            <div className="text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 mx-auto mb-3">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">30 min</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">de estudio</p>
                                <div className="mt-3 w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">18 de 30 minutos</p>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Actividad Reciente</h2>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                        <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Lección completada</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">JavaScript - Closures</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                        <Award className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Certificado obtenido</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">HTML & CSS Basics</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                                        <Star className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Racha de 5 días</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">¡Sigue así!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
