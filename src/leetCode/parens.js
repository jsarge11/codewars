var isValid = function(s) {
    let bracket = 0;
    let paren = 0;
    let curly = 0;
    for (let i = 0; i < s.length; i++) {
        const enclosure = s[i];
        switch (enclosure) {
            case "(":
                paren++;
                break;
            case "[":
                bracket++;
                break;
            case "{":
                curly++;
                break;
            case ")":
                paren--;
                break;
            case "]"
                bracket--;
                break;
            case "}"
                curly--;
                break;   
        }
        if (paren < 0 || curly < 0 || bracket < 0) {
            return false;
        }
    }
    
    return (paren === 0 && bracket === 0 && curly == 0)
};

"([)]"

"()[]"