export const registerComponentAnimation = {
    hidden:{
        opacity:0,
        x:-100
    },
    show:{
        opacity:1,
        x:0,
        transition:{

            delay:0.15*4,

            duration:0.3,
            ease:'linear',
            x:{
                type:"spring",
                stiffness:200
            }
        }
    },
    exit:{
        opacity:0,
        x:-100,
        transition:{
            duration:0.3,
            ease:'easeOut'
        }
    }
}

export const registerTextAnimation = {
    hidden:{
        rotateX:90,
    },
    show:{
        rotateX:360,
        opacity:1,
        transition:{
           duration:0.4,
           ease:'linear'     
        }
    }
    ,exit:{
        rotateX:90,
        transition:{
            duration:0.3
        }
    }
}

export const registerTextContainerAnimation = {
    hidden:{
        opacity:1,
    },
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.15,
        }
    },
    exit:{
        opacity:1,
        transition:{
            duration:0.3*3,
            staggerChildren:0.15,
        }
    }
}
