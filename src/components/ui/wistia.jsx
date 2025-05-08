import Script from "next/script";

export default function Wistia({ id }) {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" async />
      <Script
        src={`https://fast.wistia.com/embed/${id}.js`}
        async
        type="module"
      />
      <style>{`
        wistia-player[media-id='${id}']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 56.25%;
        }
      `}</style>
      <wistia-player aspect="1.7777777777777777" media-id={id}></wistia-player>
    </>
  );
}
