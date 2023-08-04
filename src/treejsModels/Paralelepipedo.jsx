import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import music from '/img/projects/music.png'
import fotografia from '/img/projects/fotografia.png'
import viagens from '/img/projects/viagens.png'
import tech from '/img/projects/tech.png'

export default function Paralelepipedo({techName = 'Musica'}) {
    const projectImgPath = {
        'Musica': music,
        'Fotografia': fotografia,
        'Viagens': viagens,
        'Tecnologia': tech,
    }

    // Cria a textura
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(projectImgPath[techName]);
    
    return (
    <mesh>
        <boxGeometry args={[3,0.1, 5]}/>
        <meshBasicMaterial map={texture}>
             <RenderTexture attach="map">
                <PerspectiveCamera 
                    makeDefault
                    position={[0,0,0]}
                />
                <color attach="background" args={["#686868"]}/>
                {/* <Text fontSize={0.5} color="#0caaaa" ref={textRef}>{textString}</Text> */}
            </RenderTexture> 
        </meshBasicMaterial>
    </mesh>
  )
}
