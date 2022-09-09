import './Work.css'
import {collection, getFirestore, getDocs} from 'firebase/firestore'
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import formFirst from "../assets/formFirst.svg";
import WorkCard from "../WorkCard/WorkCard";


const Work = () => {

    const db = getFirestore()
    const ref = collection(db, 'projects')


    const [projects, setProjects] = useState([]);


    useEffect(() => {
        getDocs(ref)
            .then((snapShot) => {
                setProjects(
                    snapShot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                )
            })
    }, []);


    return (

        <div id='work' className="work-container">
            {/*<img src={formFirst} className="form-1-work"/>*/}

            <motion.div initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}} className="work-selector">
                <p>My <span>Work</span></p>
                <div className="work-boxes">
                    {
                        projects.map((data) => {
                            return (
                                <WorkCard data={data} key={data.title}/>
                            )
                        })
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default Work