import { ProfileCard } from "../../assets/profileCard"

import "../../styles/staff/index.css"

interface Profiles {
    [key: string]: {
        msg: string,
        labelText: string,
        labelInfo: string,
        labelImg: string,
        imageColor: string,
        discordId: string,
        iconUrl: string,
        description: string,
        sns: {[key: string]: string}[]
    }
}

const staffProfiles: Profiles = {
    "kuripasanda": {
        msg: "Owner",
        labelText: "設",
        labelInfo: "設立メンバー",
        labelImg: "/images/staff/GoldCoin.png",
        imageColor: "rgb(144, 214, 40)",
        discordId: "kuripasanda",
        iconUrl: "/images/staff/staffIcons/kuripasanda.webp",
        description: "意外とすごい人",
        sns: [
            {"twitter": "https://twitter.com/kuripachanda"},
            {"github": "https://github.com/kuripasanda"},
            {"youtube": "https://twitter.com/kuripachanda"},
            {"discord": "kuripasanda"}
        ]
    },
    "Tomo3105fbk": {
        msg: "Admin",
        labelText: "設",
        labelInfo: "設立メンバー",
        labelImg: "/images/staff/GoldCoin.png",
        imageColor: "rgb(0, 179, 255)",
        discordId: "tomo3105fbk",
        iconUrl: "/images/staff/staffIcons/Tomo3105fbk.webp",
        description: "多分いい人です",
        sns: [
            {"twitter": "https://twitter.com/Tomo3105_"},
            {"discord": "tomo3105fbk"}
        ]
    },
    "Xterea": {
        msg: "Admin",
        labelText: "設",
        labelInfo: "設立メンバー",
        labelImg: "/images/staff/GoldCoin.png",
        imageColor: "rgb(255, 56, 162)",
        discordId: "xterea",
        iconUrl: "/images/staff/staffIcons/Xterea.webp",
        description: "<メッセージ>",
        sns: [
            {"discord": "xterea"}
        ]
    },
    "ちぃ": {
        msg: "Admin",
        labelText: "設",
        labelInfo: "設立メンバー",
        labelImg: "/images/staff/GoldCoin.png",
        imageColor: "rgb(254, 162, 57)",
        discordId: "xterea",
        iconUrl: "/images/staff/staffIcons/chibio.webp",
        description: "<メッセージ>",
        sns: [
            {"discord": "chibio"}
        ]
    }
    ,
    "葉月": {
        msg: "Admin",
        labelText: "設",
        labelInfo: "設立メンバー",
        labelImg: "/images/staff/GoldCoin.png",
        imageColor: "rgb(218, 88, 254)",
        discordId: "xterea",
        iconUrl: "/images/staff/staffIcons/ciel_3220.webp",
        description: "<メッセージ>",
        sns: [
            {"discord": "ciel_3220"}
        ]
    }
}

export function Staff() {

    // タイトル設定
    document.title = "Staff | EarthUnity"

    return (
        <div>

            <div className="pageTitle">
                <div className="pageTitleContent">
                    <div className="pageTitleText">
                        <span>
                            <h2>運営紹介</h2>
                        </span>
                    </div>
                </div>
                <div className="pageTitleSpace"></div>
            </div>

            <div className="content">
                
                <div className="profileSection">
                    <div className="profiles">
                        <div>
                            {Object.keys(staffProfiles).map(key => (
                                <ProfileCard
                                        name={key}
                                        msg={staffProfiles[key].msg}
                                        labelText={staffProfiles[key].labelText}
                                        labelInfo={staffProfiles[key].labelInfo}
                                        labelImg={staffProfiles[key].labelImg}
                                        imageColor={staffProfiles[key].imageColor}
                                        discordId={staffProfiles[key].discordId}
                                        description={staffProfiles[key].description}
                                        iconUrl={staffProfiles[key].iconUrl}
                                        sns={staffProfiles[key].sns}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}