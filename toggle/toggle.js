
        let togcil1 = document.querySelector('.togcil-1');
        let togcil2 = document.querySelector('.togcil-2');
        let togcil3 = document.querySelector('.togcil-3');
        const toggle = document.querySelector('.toggle');
        const navMenu = document.querySelector('.navmenu');
        const contentWrapper = document.querySelector('.content-wrapper');
        

        const navActive = () => {

            let a = 'togcil-1-1';
            let b = 'togcil-1-2';

            let c = 'togcil-3-1';
            let d = 'togcil-3-2';

            if(togcil1.classList.contains(a) && togcil3.classList.contains(c)){
                [a, b] = [b, a],
                [c, d] = [d, c]
            };

            togcil1.classList.toggle(a)
            togcil3.classList.toggle(c)
            setTimeout(function(){
                togcil1.classList.toggle(b)
                togcil3.classList.toggle(d)
                togcil2.classList.toggle('togcil-2-1')
            }, 300);
            
            navMenu.classList.toggle('nav-slide');

        }

        
        toggle.addEventListener('click', navActive);