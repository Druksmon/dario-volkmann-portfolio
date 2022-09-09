import './Skills.css'
import {motion} from "framer-motion";


const Skills = () => {
    return (
        <>
            <div className="skills-container">
                <motion.div initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{ duration: 0.5}} className="skills-selector">
                    <p>My <span>Skills</span></p>
                    <div className="skills-icon-container">
                        <motion.div whileHover={{scale: 1.1}} transition={{ duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49.324" height="53" viewBox="0 0 42.324 48">
                                <path id="logo_html5" className="tech__zone--svg"
                                      d="M-7178.439-589h0l-17.285-4.8-3.852-43.2h42.324l-3.856,43.2-17.331,4.8Zm-11.6-20.5.743,8.319,10.853,3.013.025-.007h0l10.844-3.005.079-.895,1.245-13.949.129-1.423h-19.308l-.485-5.426h20.276l.105-1.191.24-2.686.128-1.421H-7191.7l.128,1.421,1.3,14.6h18.364l-.614,6.872-5.909,1.595h-.007l-5.9-1.593-.379-4.226h-5.318Z"
                                      transform="translate(7199.576 637)"></path>
                            </svg>
                            <h5>HTML</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49.324" height="53" viewBox="0 0 42.324 48">
                                <path id="logo_css3" className="tech__zone--svg"
                                      d="M-5945.231-2274h0l-17.285-4.8-3.852-43.2h42.324l-3.856,43.195-17.332,4.805Zm-11.595-20.5.743,8.32,10.854,3.013.024-.006h0l10.844-3.005.08-.9,1.245-13.949.129-1.423.957-10.724h-26.541l.481,5.3h20.252l-.482,5.425h-19.3l.475,5.3h18.363l-.614,6.872-5.91,1.595,0,0-5.9-1.594-.377-4.226h-5.319Z"
                                      transform="translate(5966.368 2322.001)"></path>
                            </svg>
                            <h5>CSS</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49.324" height="53"
                                 viewBox="0 0 48.001 48.001">
                                <path id="logo_javascript" className="tech__zone--svg"
                                      d="M-4810-1070h-48v-48h48v48Zm-15.757-10.5h0l-3.672,2.126c.871,1.72,3.1,4.609,8.216,4.609,4.541,0,7.475-2.467,7.475-6.284,0-3.78-2.2-5.461-5.993-7.088l-1.127-.483c-1.884-.816-2.771-1.352-2.771-2.74a1.966,1.966,0,0,1,2.159-1.932,3.079,3.079,0,0,1,2.9,1.932l3.511-2.255a6.65,6.65,0,0,0-6.411-3.609c-3.889,0-6.605,2.452-6.605,5.962,0,3.948,2.6,5.6,5.413,6.8l1.128.483c2.049.9,3.286,1.438,3.286,3,0,1.33-1.229,2.224-3.06,2.224a4.952,4.952,0,0,1-4.448-2.74Zm-15.95.388h0l-3.673,2.223a6.97,6.97,0,0,0,6.767,4.123c4.343,0,6.735-2.414,6.735-6.8v-15.4h-4.511v15.338c0,2.013-.7,2.835-2.417,2.835-1.592,0-2.227-1.126-2.9-2.319Z"
                                      transform="translate(4858 1118)"></path>
                            </svg>
                            <h5>JavaScript</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49.324" height="53" viewBox="0 0 15 15">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.31537 1.83658C4.91591 1.72069 4.6196 1.75177 4.40406 1.86852C4.18851 1.98528 4.00061 2.21648 3.87946 2.61438C3.75743 3.01517 3.71578 3.55024 3.77508 4.1963C3.78469 4.30099 3.79689 4.40794 3.81168 4.51697C4.33487 4.38401 4.89711 4.279 5.48788 4.20569C5.89742 3.63189 6.327 3.11445 6.76281 2.66575C6.74097 2.64805 6.71917 2.63058 6.69739 2.61335C6.18865 2.21073 5.71773 1.95332 5.31537 1.83658ZM7.49994 1.9775C7.43924 1.92661 7.37857 1.87716 7.31796 1.8292C6.746 1.37655 6.16025 1.04047 5.59401 0.876189C5.02487 0.711062 4.44065 0.711415 3.92776 0.989234C3.41488 1.26705 3.09543 1.7562 2.92282 2.32312C2.75109 2.88714 2.71259 3.56136 2.77927 4.28771C2.7949 4.45796 2.81643 4.63245 2.84379 4.81065C2.67409 4.87146 2.51042 4.93563 2.35329 5.00297C1.68286 5.2903 1.10837 5.64527 0.694221 6.06491C0.277951 6.4867 0 7.00057 0 7.58387C0 8.16716 0.27795 8.68103 0.694221 9.10282C1.10837 9.52246 1.68286 9.87743 2.35329 10.1648C2.51042 10.2321 2.67408 10.2963 2.84378 10.3571C2.81642 10.5353 2.79488 10.7098 2.77925 10.8801C2.71257 11.6064 2.75107 12.2806 2.9228 12.8447C3.09541 13.4116 3.41486 13.9007 3.92774 14.1785C4.44063 14.4564 5.02485 14.4567 5.59399 14.2916C6.16023 14.1273 6.74598 13.7912 7.31794 13.3386C7.37856 13.2906 7.43923 13.2412 7.49994 13.1903C7.56065 13.2412 7.62132 13.2906 7.68193 13.3386C8.2539 13.7912 8.83965 14.1273 9.40589 14.2916C9.97503 14.4567 10.5592 14.4564 11.0721 14.1785C11.585 13.9007 11.9045 13.4116 12.0771 12.8447C12.2488 12.2806 12.2873 11.6064 12.2206 10.8801C12.205 10.7098 12.1835 10.5353 12.1561 10.3571C12.3258 10.2963 12.4895 10.2321 12.6467 10.1648C13.3171 9.87743 13.8916 9.52246 14.3058 9.10282C14.722 8.68103 15 8.16716 15 7.58387C15 7.00057 14.722 6.4867 14.3058 6.06491C13.8916 5.64527 13.3171 5.2903 12.6467 5.00297C12.4895 4.93562 12.3258 4.87144 12.1561 4.81061C12.1834 4.63242 12.205 4.45795 12.2206 4.28771C12.2873 3.56136 12.2488 2.88714 12.0771 2.32312C11.9045 1.7562 11.585 1.26705 11.0721 0.989234C10.5592 0.711415 9.97501 0.711062 9.40587 0.876189C8.83963 1.04047 8.25388 1.37655 7.68191 1.8292C7.62131 1.87716 7.56064 1.92661 7.49994 1.9775ZM7.49994 3.34216C7.27514 3.57233 7.05016 3.82461 6.82771 4.09712C7.04936 4.08834 7.27361 4.08387 7.5 4.08387C7.72635 4.08387 7.95056 4.08834 8.17216 4.09712C7.94972 3.82461 7.72474 3.57233 7.49994 3.34216ZM9.51199 4.20567C9.10245 3.63188 8.67287 3.11444 8.23707 2.66575C8.25891 2.64805 8.28071 2.63058 8.30249 2.61335C8.81123 2.21073 9.28215 1.95332 9.68451 1.83658C10.084 1.72069 10.3803 1.75177 10.5958 1.86852C10.8114 1.98528 10.9993 2.21648 11.1204 2.61438C11.2424 3.01517 11.2841 3.55024 11.2248 4.1963C11.2152 4.30098 11.203 4.40792 11.1882 4.51694C10.665 4.38399 10.1028 4.27898 9.51199 4.20567ZM8.94935 5.15034C8.484 5.10693 7.9991 5.08387 7.5 5.08387C7.00085 5.08387 6.51591 5.10693 6.05052 5.15035C5.79069 5.53887 5.53944 5.95428 5.30171 6.39316C5.08522 6.79282 4.89116 7.19123 4.71966 7.58387C4.89117 7.97652 5.08524 8.37494 5.30173 8.77462C5.53945 9.21348 5.7907 9.62888 6.05051 10.0174C6.5159 10.0608 7.00085 10.0839 7.5 10.0839C7.99911 10.0839 8.48401 10.0608 8.94936 10.0174C9.20918 9.62889 9.46042 9.21349 9.69815 8.77462C9.91464 8.37494 10.1087 7.97652 10.2802 7.58387C10.1087 7.19124 9.91465 6.79282 9.69817 6.39316C9.46043 5.95427 9.20918 5.53886 8.94935 5.15034ZM10.7728 6.28838C10.7096 6.16452 10.6445 6.04064 10.5775 5.91687C10.4696 5.71781 10.3589 5.52276 10.2456 5.33206C10.5062 5.38167 10.7573 5.43803 10.9978 5.5005C10.9346 5.75638 10.8596 6.01957 10.7728 6.28838ZM10.7728 8.87936C10.7096 9.00323 10.6445 9.12712 10.5774 9.25091C10.4696 9.44995 10.3589 9.64498 10.2456 9.83568C10.5062 9.78606 10.7573 9.72969 10.9978 9.66722C10.9346 9.41135 10.8596 9.14816 10.7728 8.87936ZM11.9533 9.36619C11.8083 8.7925 11.6114 8.19354 11.3649 7.58386C11.6114 6.97419 11.8083 6.37523 11.9533 5.80154C12.0563 5.84048 12.1561 5.8807 12.2528 5.92212C12.8491 6.17768 13.2997 6.46916 13.594 6.76735C13.8862 7.06339 14 7.33873 14 7.58387C14 7.829 13.8862 8.10434 13.594 8.40038C13.2997 8.69857 12.8491 8.99005 12.2528 9.24561C12.1561 9.28703 12.0563 9.32725 11.9533 9.36619ZM11.1882 10.6508C10.665 10.7837 10.1028 10.8888 9.51201 10.9621C9.10247 11.5359 8.67288 12.0533 8.23707 12.502C8.25891 12.5197 8.28072 12.5372 8.30251 12.5544C8.81125 12.957 9.28217 13.2145 9.68453 13.3312C10.084 13.4471 10.3803 13.416 10.5958 13.2993C10.8114 13.1825 10.9993 12.9513 11.1204 12.5534C11.2425 12.1526 11.2841 11.6175 11.2248 10.9715C11.2152 10.8668 11.203 10.7598 11.1882 10.6508ZM7.49994 11.8256C7.72475 11.5954 7.94973 11.3431 8.17218 11.0706C7.95057 11.0794 7.72635 11.0839 7.5 11.0839C7.27361 11.0839 7.04935 11.0794 6.82769 11.0706C7.05015 11.3431 7.27513 11.5954 7.49994 11.8256ZM4.75426 9.83565C4.64098 9.64497 4.53025 9.44994 4.42244 9.25091C4.35539 9.12712 4.29025 9.00323 4.22704 8.87936C4.14031 9.14815 4.06531 9.41133 4.00208 9.66719C4.24253 9.72967 4.49368 9.78603 4.75426 9.83565ZM3.81167 10.6508C4.33485 10.7837 4.8971 10.8887 5.48786 10.962C5.8974 11.5358 6.327 12.0533 6.76282 12.502C6.74097 12.5197 6.71915 12.5372 6.69737 12.5544C6.18863 12.957 5.71771 13.2145 5.31535 13.3312C4.91589 13.4471 4.61958 13.416 4.40404 13.2993C4.18849 13.1825 4.00059 12.9513 3.87944 12.5534C3.75741 12.1526 3.71576 11.6175 3.77506 10.9715C3.78468 10.8668 3.79688 10.7598 3.81167 10.6508ZM3.04656 9.36615C3.19156 8.79247 3.38844 8.19352 3.63494 7.58387C3.38844 6.97421 3.19157 6.37526 3.04656 5.80158C2.94366 5.84051 2.84383 5.88071 2.74721 5.92212C2.15089 6.17768 1.70026 6.46916 1.40597 6.76735C1.1138 7.06339 1 7.33873 1 7.58387C1 7.829 1.1138 8.10434 1.40597 8.40038C1.70026 8.69857 2.15089 8.99005 2.74721 9.24561C2.84383 9.28702 2.94366 9.32722 3.04656 9.36615ZM4.00208 5.50053C4.06531 5.7564 4.14031 6.01958 4.22704 6.28837C4.29024 6.16452 4.35538 6.04065 4.42242 5.91687C4.53024 5.71782 4.64098 5.52278 4.75427 5.33208C4.49369 5.3817 4.24254 5.43806 4.00208 5.50053ZM6 7.58387C6 6.75544 6.67157 6.08387 7.5 6.08387C8.32843 6.08387 9 6.75544 9 7.58387C9 8.41229 8.32843 9.08387 7.5 9.08387C6.67157 9.08387 6 8.41229 6 7.58387ZM7.5 7.08387C7.22386 7.08387 7 7.30772 7 7.58387C7 7.86001 7.22386 8.08387 7.5 8.08387C7.77614 8.08387 8 7.86001 8 7.58387C8 7.30772 7.77614 7.08387 7.5 7.08387Z"/>
                            </svg>
                            <h5>REACT</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49.324" height="53" viewBox="0 0 48 48">
                                <path id="logo_bootstrap" className="tech__zone--svg"
                                      d="M-4468.189-1190h-35.622a6.2,6.2,0,0,1-6.189-6.189v-35.622a6.2,6.2,0,0,1,6.19-6.189h35.621a6.2,6.2,0,0,1,6.189,6.189v35.622A6.2,6.2,0,0,1-4468.189-1190Zm-28.3-38.531v29.062h14.084a14.917,14.917,0,0,0,3.805-.488,10.215,10.215,0,0,0,3.3-1.507,7.458,7.458,0,0,0,2.3-2.625,8.044,8.044,0,0,0,.854-3.806,8.08,8.08,0,0,0-1.323-4.66,7.016,7.016,0,0,0-4.009-2.707,7.265,7.265,0,0,0,2.951-2.4,6.388,6.388,0,0,0,1-3.663,7.843,7.843,0,0,0-.671-3.419,5.614,5.614,0,0,0-1.894-2.218,8.207,8.207,0,0,0-2.929-1.2,18.175,18.175,0,0,0-3.786-.366Zm13.228,24.1h-6.837v-7.979h6.96a5.406,5.406,0,0,1,3.338.958,3.772,3.772,0,0,1,1.262,3.194,4.015,4.015,0,0,1-.387,1.873,3.086,3.086,0,0,1-1.038,1.16,4.4,4.4,0,0,1-1.505.61A8.572,8.572,0,0,1-4483.258-1204.435Zm-.365-12.333h-6.472v-6.8h5.983a9.335,9.335,0,0,1,1.648.143,4.129,4.129,0,0,1,1.4.508,2.715,2.715,0,0,1,.977,1.018,3.4,3.4,0,0,1,.367,1.67,3.087,3.087,0,0,1-1.1,2.645A4.61,4.61,0,0,1-4483.623-1216.767Z"
                                      transform="translate(4510 1238)"></path>
                            </svg>
                            <h5>BOOTSTRAP 5</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.324" height="53" viewBox="0 0 48.002 48">
                                <path id="logo_git" className="tech__zone--svg"
                                      d="M47.1,21.952,26.138.995a3.091,3.091,0,0,0-4.371,0L17.415,5.347l5.52,5.52a3.671,3.671,0,0,1,4.649,4.68L32.9,20.868a3.673,3.673,0,1,1-2.2,2.074L25.739,17.98V31.038a3.671,3.671,0,1,1-3.024-.107V17.752a3.629,3.629,0,0,1-1.2-.8,3.677,3.677,0,0,1-.792-4.021L15.276,7.485.906,21.855a3.092,3.092,0,0,0,0,4.373L21.864,47.184a3.092,3.092,0,0,0,4.372,0L47.1,26.326a3.093,3.093,0,0,0,0-4.373"
                                      transform="translate(0 -0.089)"></path>
                            </svg>
                            <h5>GIT</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.324" height="53" viewBox="0 0 24 24">
                                <path
                                    d="m12 12.534v-2.663h-1.334v2.666zm12-5.334h-24v8h6.666v1.334h5.334v-1.333h12zm-17.334 1.334v5.337h-1.333v-4h-1.334v4h-2.666v-5.334zm6.667 0v5.337h-2.666v1.334h-2.666v-6.666zm9.333 0v5.337h-1.333v-4h-1.334v4h-1.334v-4h-1.333v4h-2.667v-5.334z"/>
                            </svg>
                            <h5>NPM</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.324" height="53" viewBox="0 0 16 16"
                                 fill="currentColor" className="bi bi-terminal">
                                <path
                                    d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                                <path
                                    d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
                            </svg>
                            <h5>TERMINAL</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="53.324" height="53" viewBox="0 0 24 24"
                                 role="img"><title>Figma icon</title>
                                <path
                                    d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0zM12 0v8h4a4 4 0 1 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4zM4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z"/>
                            </svg>
                            <h5>FIGMA</h5>
                        </motion.div>
                        <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.5, type: "spring"}}
                                    className="skills-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="53.324"
                                 height="53">
                                <path
                                    d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8 9.9921875 L 11.978516 9.9921875 C 13.947516 9.9921875 15.294922 11.339125 15.294922 13.328125 C 15.294922 15.283125 13.898344 16.623047 11.902344 16.623047 L 9.7636719 16.623047 L 9.7636719 19.857422 L 8 19.857422 L 8 9.9921875 z M 9.7636719 11.46875 L 9.7636719 15.160156 L 11.507812 15.160156 C 12.765813 15.160156 13.503906 14.504125 13.503906 13.328125 C 13.503906 12.119125 12.784672 11.46875 11.513672 11.46875 L 9.7636719 11.46875 z M 19.207031 12.226562 C 20.984031 12.226562 22.099656 13.013047 22.222656 14.373047 L 20.630859 14.373047 C 20.507859 13.847047 20.007844 13.511719 19.214844 13.511719 C 18.442844 13.511719 17.861328 13.881875 17.861328 14.421875 C 17.861328 14.845875 18.21675 15.105391 18.96875 15.275391 L 20.287109 15.576172 C 21.716109 15.897172 22.378906 16.513281 22.378906 17.613281 C 22.378906 19.050281 21.059359 20.007813 19.193359 20.007812 C 17.327359 20.007812 16.151484 19.199844 16.021484 17.839844 L 17.697266 17.839844 C 17.861266 18.393844 18.386375 18.722656 19.234375 18.722656 C 20.088375 18.722656 20.683594 18.346969 20.683594 17.792969 C 20.683594 17.368969 20.363344 17.101359 19.652344 16.943359 L 18.326172 16.636719 C 16.890172 16.308719 16.214844 15.645578 16.214844 14.517578 C 16.214844 13.163578 17.443031 12.226562 19.207031 12.226562 z"/>
                            </svg>
                            <h5>PHOTOSHOP</h5>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Skills