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
            duration:0.2,
            staggerChildren:0.15,
        }
    }
}

export const loginContainerAnimation = {
    hidden:{
        opacity:0,
        y:'-70%'
        ,x:'-100%'
    },
    show:{
        opacity:1,
        y:'-50%',
        transition:{
            delay:0.3*3,
            duration:0.3,
            ease:'linear',
            y:{
                type:"spring",
                stiffness:200
            }
        }
    },
    exit:{
        opacity:0,
        y:'-70%',
        transition:{
            duration:0.3,
            ease:'easeOut'
        }
    }
}
export const loginTextContainerAnimatoin = {
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
            staggerChildren:0.15,
            duration:0.2
        }
    }
 }
 export const loginTextAnimation =  {
    hidden:{
        rotateX:90,
    },
    show:{
        rotateX:360,
        transition:{
           
           duration:0.4,
           ease:'linear'     
        }
    }
    ,exit:{
        rotateX:90,
        transition:{
            
            duration:0.2
        }
    }
}