import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className='socialLogin'>
            <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />
                Google
            </button>

            <button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
                GitHub
            </button>
        </div>
    );
};

export default SocialLogin;