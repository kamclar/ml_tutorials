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
        height='50vh'
        width='60vh'
        controls={true}/>
      </div>
          
      <div className='terminalHeader'>Python
      <button className='button'>Copy</button>
      </div>
      <TextFileReader txt={'/codes/code1.py'} />
    </div>
    );
};



