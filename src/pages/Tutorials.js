import React from 'react';
import ReactPlayer from 'react-player';
import { Lectures } from '../components/TutorialsData';
import TextFileReader from '../components/textFileReader.js';


export function Tutorials() {
  return (
    <div className='tutorials'>
      <h1 className='titleStyle'>Introduction</h1>
      <div className='textStyle'>
        text
      </div>
    </div>
  );
}

export function T1(props) {
  console.log(process.env.PUBLIC_URL +'/videos/video1.avi')
  var i = props.i
  console.log(i)

  return (
    <div className='tutorialsStyle'>
      <h1 className='titleStyle'>
          {Lectures[i].name}
      </h1>

      <div className='textStyle'>
        {Lectures[i].text}
      </div>

      <div className='playerStyle'>
      <ReactPlayer url={'/videos/video1.mp4'}
        height='80%'
        width='100%'
        controls={true}/>
      </div>

    
      <iframe frameborder="0" width="100%" height="500px" src="https://kamclar.github.io/jl/retro/notebooks/index.html?path=test.ipynb"></iframe>
      
{/*       <iframe src="https://trinket.io/embed/python/3d8d7ce66b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
      
      <div className='terminalHeader'>Python
      <button className='button'>Copy</button>
      </div>
      <TextFileReader txt={'/codes/code1.py'} /> */}
    </div>
    );
};



