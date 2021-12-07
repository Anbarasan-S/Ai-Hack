var replace ="fuck";
            var re = new RegExp(`\\b${replace}\\b`,"g");
            let change="fucking fuck";
       change=change.replace(re,"sensitive content");
            console.log(change);