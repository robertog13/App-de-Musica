import React from 'react';
import "./MusicsCards.css"

function MusicCard(prop) {
  const { trackId ,previewUrl, trackName} = prop;
  return (
    <div className='MusicsCards'> 
    
      <input type="checkbox" name="like" id="like" />

      <p>{ trackName }</p>
      <audio src={ previewUrl } controls>
        <track kind='captions' />
        O seu navegador não suporta o elemento
        {''}
        {''}
        <code>audio</code>
        .
      </audio>
    </div>
  );
}

export default MusicCard;