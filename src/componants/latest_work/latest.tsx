import React from "react";
import YoutubeEmbed from "./youtubeembed";


export default function Latest() {
  return (
    <div>
        <section className="latest-section" id="latest">
            <div className="latest-container">
                <div className="latest-title">
                    <h3 className="title">
                        Latest Work
                    </h3>
                </div>
            <div className="main-video-container">
                <div className="main-video">
                    <YoutubeEmbed embedId="0JeJ5Ci7b4k"/>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
