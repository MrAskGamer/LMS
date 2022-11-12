(function()	{
    let a = 1;
    let b = 1;
    document.addEventListener('keypress', function (e) {
        if (e.key === '/') {
            if ( a == 1 ) {
                a = a - 1
                document.querySelectorAll('em.danger-color, em.success-color').forEach(e => {
                    e.style.opacity = "" + a;
                })
                let choice_length = document.getElementsByTagName('input').length;
                for (let i=0;i<choice_length;i++) {
                    if ( document.getElementsByTagName('input')[i].getAttribute('type') == 'radio' ) {
                        document.getElementsByTagName('input')[i].style.opacity = ""+a+"";
                    };
                };
            }
            else {
                a = a + 1
                document.querySelectorAll('em.danger-color, em.success-color').forEach(e => {
                    e.style.opacity = "" + a;
                })
                let choice_length = document.getElementsByTagName('input').length;
                for (let i=0;i<choice_length;i++) {
                    if ( document.getElementsByTagName('input')[i].getAttribute('type') == 'radio' ) {
                        document.getElementsByTagName('input')[i].style.opacity = ""+a+"";
                    };
                };
            };
        };
    	if (e.key === '`') {
    		for (let i = 0; i<document.querySelectorAll(".lms-activity-lst .lms-margin-top-26").length; i++) {
    			  if (document.querySelectorAll(".lms-activity-lst .lms-margin-top-26")[i].innerText.includes("--/")) {
    			  document.querySelectorAll(".lms-activity-lst .lms-margin-top-26")[i].style.backgroundColor = '#FFFFC6'
    		  }
    			 else if (document.querySelectorAll(".lms-activity-lst .lms-margin-top-26")[i].innerText.includes("/")) {
    				document.querySelectorAll(".lms-activity-lst .lms-margin-top-26")[i].style.backgroundColor = '#C3FFC3'
    		  }
    			else if (!document.querySelectorAll(".lms-activity-lst .lms-margin-top-26")[i].innerText.includes("/")) {
    			  document.querySelectorAll(".lms-activity-lst .lms-margin-top-26")[i].style.backgroundColor = '#FFB3B2'
    		  }
    		}
    	};
    });
})();
