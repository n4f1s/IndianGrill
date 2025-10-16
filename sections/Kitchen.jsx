"use client"


import { Loader } from '@react-three/drei'
import { UI } from '../components/UI'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Experience } from '../components/Experience'


const Kitchen = () => {

    return (
        <div className="w-full h-auto bg-[#FDF7F2] overflow-hidden">
            <div className="wrapper">
                <div className="grid lg:grid-cols-4">
                    {/* Left content */}
                    <div className="col-span-1 flex flex-col">
                        <p className="heading3">Our Kitchen ——</p>
                        <h1 className="heading1">Where Cleanliness Meets Perfection</h1>
                        <p className='heading2 mt-8'>
                            Step into a kitchen where freshness meets care. Every dish
                            begins in a spotless, organized space that ensures quality,
                            hygiene, and authentic taste in every bite.
                        </p>
                    </div>

                    {/* Right - 3D book section */}
                    <div
                        className="
                            w-full 
                            min-w-[300px]
                            min-h-[300px]
                            sm:min-h-[650px]
                            aspect-[16/9]  
                            lg:aspect-[21/9] 
                            col-span-3 
                            relative
                        "
                    >
                        <UI />
                        <Loader
                            containerStyles={{
                                backgroundColor: "transparent",
                            }}
                            innerStyles={{
                                color: "black", // text color
                            }}
                            dataStyles={{
                                color: "black", // loading percentage color
                            }}
                            barStyles={{
                                backgroundColor: "black", // progress bar color (optional)
                            }}
                        />
                        <Canvas
                            shadows
                            camera={{
                                position: [-0.05, -1, 4],
                                fov: 30,
                            }}
                            style={{ width: "100%", height: "100%", cursor: "pointer" }}
                        >
                            <group position-y={0}>
                                <Suspense fallback={null}>
                                    <Experience />
                                </Suspense>
                            </group>
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Kitchen