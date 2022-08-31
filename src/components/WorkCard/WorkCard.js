import './WorkCard.css'
import {motion} from "framer-motion";


const WorkCard = ({data}) => {

    const {title, img, type, text, gitHub, link, ready} = data

    return (
        <div className='work-card-container' key={title}>
            <div style={{backgroundImage: `url(${img})`}} className="work-card-img">
                <motion.div initial={{opacity: 0}} whileHover={{opacity: 1}} onTap={{opacity: 1}}
                            transition={{duration: 0.5}}
                            className="work-hover">
                    <p>{text}</p>
                    <div>
                        {
                            ready ? (
                                    <motion.a initial={{color: "rgba(208, 208, 208, 0.8)", scale: 1}}
                                              whileHover={{color: "rgba(85,143,255,0.8)", scale: 1.05}}
                                              transition={{duration: 0.3}}
                                              className={ready ? 'demo-work-button ' : 'demo-work-button demo-work-button-not-ready'}
                                              target='_blank'
                                              href={link}>DEMO >

                                    </motion.a>
                                ) :
                                (
                                    <motion.a initial={{color: "rgba(208, 208, 208, 0.8)", scale: 1}}
                                              whileHover={{color: "rgba(85,143,255,0.8)", scale: 1.05}}
                                              transition={{duration: 0.3}}
                                              className={'demo-work-button demo-work-button-not-ready'}
                                              target='_blank'
                                    >DEMO >

                                    </motion.a>
                                )
                        }
                    </div>
                </motion.div>
            </div>
            <div className="work-card-text">
                <div className="work-card-title">
                    <h3>{title}</h3>
                    <p>{type}</p>
                </div>
                <div className="work-card-buttons">
                    {
                        ready ? (
                                <div>
                                    <a target='_blank' className={ready ? ' ' : 'demo-work-button-ready'}
                                       href={link}>DEMO</a>
                                    <a target='_blank' href={gitHub}>GitHub</a>
                                </div>

                            ) :
                            (
                                <div>
                                    <a className={'demo-work-button-not-ready'}>DEMO</a>
                                    <a className={'demo-work-button-not-ready'}>GitHub</a>
                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default WorkCard