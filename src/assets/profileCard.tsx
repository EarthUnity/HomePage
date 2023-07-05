import { Link } from "react-router-dom"
import { Tooltip } from "@mui/material"
import "../styles/assets/profileCard.css"
import { ReactNode, MouseEvent } from "react"

interface ProfileProps {
    name: string,
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

export const ProfileCard = (props: ProfileProps) => {

    // 右クリック禁止
    function handleContextMenu(evt: MouseEvent<HTMLDivElement>) {
        evt.preventDefault();
      }

    let labelComponent: ReactNode
    let labelImage: ReactNode
    if (props.labelImg != "") {
        labelImage = (
            <img className="labelImg" src={props.labelImg} onContextMenu={handleContextMenu} />
        )
    }

    if (props.labelText != "") {
        labelComponent = (
            <div className="label">
                <div onContextMenu={handleContextMenu}>
                    {labelImage}
                    <Tooltip
                        title={props.labelInfo}
                        enterTouchDelay={0}
                    >
                        <span className="labelText"><span>{props.labelText}</span></span>
                    </Tooltip>
                </div>
            </div>
        )
    }

    let snsSites: ReactNode[] = []
    props.sns.forEach((item) => {
        const serviceName = Object.keys(item)[0];
        const serviceUrl = item[serviceName];

        switch (serviceName) {
            case "discord": {
                snsSites.push(
                    <p className="snsInfo">
                        <Tooltip title={"@"+serviceUrl}>
                            <img src={"/images/snsLogo/"+serviceName+".svg"} alt="" />
                        </Tooltip>
                    </p>
                )
                break
            }
            default: {
                snsSites.push(
                    <p className="snsInfo">
                        <Link to={serviceUrl}>
                            <img src={"/images/snsLogo/"+serviceName+".svg"} alt="" />
                        </Link>
                    </p>
                )
                break
            }
        }
    });

    return (
        <div className="profileCard">
            <span className="imageColor" style={{backgroundColor: props.imageColor}}><p></p></span>
            
            {labelComponent}

            <div className="msg"><div><p>{props.msg}</p></div></div>
            <p className="userIcon">
                <img src={props.iconUrl} onContextMenu={handleContextMenu} />
                <div className="iconProtect"><img src="/images/global/dummy.jpeg" onContextMenu={handleContextMenu} /></div>
            </p>
            <h2 className="userName">{props.name}</h2>
            <p className="description">{props.description}</p>
            <div className="snsSites">
                {snsSites}
            </div>
        </div>
    )

}