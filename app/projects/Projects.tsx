import Image from 'next/image'
export default function Projects() {
    return (
            <div className="font-body bg-slate-100 min-h-screen pb-8">
                <div className="flex flex-col items-center pt-10">
                    <h1 className="mb-6 text-3xl font-semibold">Projects</h1>
                    <p className="font-light mb-6">Take a look at what I&apos;ve been working on.</p>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[90vw] md:w-[72vw] flex justify-center'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4'>
                            <div className='flex'>
                                <a target="_blank" href="https://www.oneuptime.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/Fyipe.png" alt="oneuptime" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>OneUptime</div>
                                        <div className='font-semibold mb-3 text-center' >
                                            Added Numerous Product Features To OneUptime, a devops platform and site for reliability engineering.
                                        </div>
                                        <div className='flex'>
                                            <Image src="/react.png" alt="react" width={50} height={50} />
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />
                                            <Image src="/node-js.png" alt="node" width={50} height={50} />
                                            <Image src="/docker.png" alt="docker" width={50} height={50} />
                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://www.forevervigorous.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/forevervigorous.png" alt="oneuptime" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>Forever Living Products</div>
                                        <div className='font-semibold mb-3 text-center' >
                                           A platform to buy Forever Living Products.
                                        </div>
                                        <div className='flex'>
                                            <Image src="/nextjs.png" alt="react" width={50} height={50} />
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />
                                            <Image src="/node-js.png" alt="node" width={50} height={50} />
                                            <Image src="/tailwind-css.png" alt="tailwind" width={50} height={50} />
                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://telescope.merklebot.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/MerkleBot.png" alt="oneuptime" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>Online Telescope</div>
                                        <div className='font-semibold mb-3 text-center' >Added Numerous Product Features To Online Telescope, a cryptocurrency platform.</div>
                                        <div className='flex'>
                                            <Image src="/vuejs.png" alt="vuejs" width={50} height={50} />
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />
                                            <Image src="/node-js.png" alt="node" width={50} height={50} />
                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://www.chefsteps.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/chefsteps.png" alt="oneuptime" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>ChefSteps</div>
                                        <div className='font-semibold mb-3 text-center' >Added Numerous Product Features To Chefsteps, a platform to find the right cuisine.</div>
                                        <div className='flex'>
                                            <Image src="/vuejs.png" alt="vue" width={50} height={50} />
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />
                                            <Image src="/node-js.png" alt="node" width={50} height={50} />
                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://britnikengineering.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/britnik.png" alt="britnik" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>Britnik Engineering</div>
                                        <div className='font-semibold mb-3 text-center' >A website for an Engineering Company.</div>
                                        <div className='flex'>
                                            <Image src="/wordpress.png" alt="wordpress" width={50} height={50} />
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />

                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://aspiring-moms.herokuapp.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/aspiring-moms.png" alt="oneuptime" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>Aspiring Moms</div>
                                        <div className='font-semibold mb-3 text-center' >Built this website to enable pregnant women have access to relevant info.</div>
                                        <div className='flex'>
                                            <Image src="/react.png" alt="react" width={50} height={50} />
                                            <Image src="/spring-boot.jpeg" alt="spring" width={50} height={50} />
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />

                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://hackerbaylabs.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/hblabs.png" alt="hblabs" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>Hackerbay Labs</div>
                                        <div className='font-semibold mb-3 text-center' >Worked on routing and external routes of this website.</div>
                                        <div className='flex'>
                                            <Image src="/html-5.png" alt="html" width={50} height={50} />
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />
                                            <Image src="/js.png" alt="js" width={50} height={50} />
                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://chat-app22.herokuapp.com/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/chat-app.png" alt="oneuptime" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>Chat App</div>
                                        <div className='font-semibold mb-3 text-center' >A Group Chat Application.</div>
                                        <div className='flex'>
                                            <Image src="/html-5.png" alt="html" width={50} height={50} />
                                            <Image src="/spring-boot.jpeg" alt="spring" width={50} height={50} />
                                            <Image src="/materialize.png" alt="materialize" width={50} height={50} />

                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex'>
                                <a target="_blank" href="https://weather-app22.netlify.app/" rel="noreferrer">
                                    <div className="rounded-lg border border-solid border-purple-800 flex flex-col items-center">
                                        <Image className='object-fill' src="/weather-app.png" alt="weather-app" width={512} height={450} />
                                        <div className='text-xl m-3 font-semibold text-purple-800'>Chat App</div>
                                        <div className='font-semibold mb-3 text-center' >A Simple Weather Application.</div>
                                        <div className='flex'>
                                            <Image src="/react.png" alt="react" width={50} height={50} /> 
                                            <Image src="/css-3.png" alt="css" width={50} height={50} />

                                        </div>

                                        <div className='bg-purple-800 w-75 text-center p-1 rounded-lg text-white mb-1 mt-1'>Visit</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}