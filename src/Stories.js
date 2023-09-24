import React from 'react';
import "./Stories.css";
import Clip from './Clip';


function Stories() {
    return (
        <div className='stories'>

            <Clip
                image="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mesa-electronic-sports-festival.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/d/dd/Imperial_Esports.png"
                title="Imperial Esports"
            />
            <Clip
                image="https://upload.wikimedia.org/wikipedia/commons/2/28/Iskandar_Investment_Esports_Carnival_2019.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/e/ea/KC_Saken.jpg"
                title="KC_Saken"
            />
            <Clip
                image="https://upload.wikimedia.org/wikipedia/commons/3/36/L%27expert-a_digital_i_Taller_e-sports_a_l%27Auditori_Josep_Irla_12.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/9/9f/Esports_Extras.png"
                title="Auditori_Josep_Irla"
            />
            <Clip
                image="https://upload.wikimedia.org/wikipedia/commons/9/9e/HTC_Vive_Pro_-_Game_Developers_Conference_2019_-_2.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/8/88/Roman_Kushnarev_are_about_to_check_in_to_the_hotel_before_the_EPICENTER_2018.jpg"
                title="Roman_Kushnarev"
            />
            <Clip
                image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Valorant_Champions_%C4%B0stanbul_2022.jpg"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg"
                title="Valorant"
            />

        </div>
    )
}

export default Stories;