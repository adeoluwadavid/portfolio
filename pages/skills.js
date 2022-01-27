import Image from 'next/image'
export default function Skills() {
    return (
        <div className='bg-slate-100'>
            <div className=' pt-10 font-body flex justify-center'>
                <div className='w-[90vw] md:w-[72vw]'>
                    <div className='flex flex-col items-center'>
                        <h1 className='mb-6 text-3xl font-semibold'>Skills</h1>
                        <p className='font-light mb-6'>Tools I have worked with.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-4'>
                        <div className='bg-white rounded-xl p-5 border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/bootstrap.png" alt="bootstrap" className='object-contain' height={50} width={50} />
                            <div className='mt-4'>Bootstrap</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/css-3.png" alt="css3" className='object-contain' height={50} width={50} />
                            <div className='mt-4'>Css3</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/docker.png" alt="docker" className='object-contain' height={50} width={50} />
                            <div className='mt-4'>Docker</div>
                        </div>
                        <div className='bg-white rounded-xl p-5 border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/figma.png" alt="figma" className='object-contain' height={50} width={50} />
                            <div className='mt-4'>Figma</div>
                        </div>
                        <div className='bg-white rounded-xl p-5 border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/git.png" alt="git" className='object-contain' height={50} width={50} />
                            <div className='mt-4'>Git</div>
                        </div>
                        <div className='bg-white rounded-xl p-5 border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/github.png" alt="github" height={50} width={50} />
                            <div className='mt-4'>Github</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/gitlab.jpeg" alt="gitlab" height={50} width={50} />
                            <div className='mt-4'>Gitlab</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/heroku.png" alt="heroku" height={50} width={50} />
                            <div className='mt-4'>BootStrap</div>
                        </div>
                        <div className='bg-white rounded-xl p-5 border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/java.png" alt="java" height={50} width={50} />
                            <div className='mt-4'>Java</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/js.png" alt="js" height={50} width={50} />
                            <div className='mt-4'>Javascript</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/mysql.png" alt="mysql" height={50} width={50} />
                            <div className='mt-4'>MySql</div>
                        </div>
                        <div className='bg-white rounded-xl p-5 border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/netlify.png" alt="netlify" height={50} width={50} />
                            <div className='mt-4'>Netlify</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/nextjs.png" alt="nextjs" height={50} width={50} />
                            <div className='mt-4'>Next</div>
                        </div>
                        <div className='bg-white rounded-xl p-5 border-solid border border-purple-300 flex flex-col items-center'>
                            <Image src="/react.png" alt="react" height={50} width={50} />
                            <div className='mt-4'>React</div>
                        </div>
                        <div className='bg-white rounded-xl p-5  border-solid border border-purple-300 flex flex-col items-center' flex flex-col items-center>
                            <Image src="/vuejs.png" alt="vuejs" height={50} width={50} />
                            <div className='mt-4'>Vue</div>
                        </div>
                    </div>

                    <div className='flex justify-center mt-10 mb-10 text-xl font-semibold'>
                        <div>For something more tangible, take a look at my projects.</div>
                    </div>
                </div>

            </div>
            <div className='bg-purple-300 pt-1 pb-5'>
                <div className='flex justify-center mt-5 mb-5'>
                    <div className='text-3xl font-semibold'> What That Means</div>
                </div>
                <div className='flex justify-center'>
                <div className='w-[90vw] grid md:grid-cols-2 gap-3'>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>Enjoy using regular CSS, along with frameworks TailWind and Bootstrap.</div>
                    </div>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>Knows how to filter data on a template, JavaScript and queryset level.</div>
                    </div>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>Can produce websites, from wireframing, prototyping to deploying production.</div>
                    </div>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>Working JavaScript, including React (with Nextjs) and Vue.</div>
                    </div>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>I can work with APIs, creating my own and using external ones.</div>
                    </div>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>Creates websites with mobile thinking first.</div>
                    </div>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>Key knowledge and implementation of CRUD functionality.</div>
                    </div>
                    <div>
                        <div className='bg-white rounded-md p-3 text-center'>Can build back-end authorization with token authentication.</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}