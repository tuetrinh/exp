//var shuffleSequence = seq("consent", "intro", shuffle("high","mid","low"), "demog", "ident");

var shuffleSequence = seq(anyType);
var defaults = ["Form", {continueOnReturn: true, hideProgressBar: true, saveReactionTime: false}];
var items =
    [
         
        //subj-low-adj
        //["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        //["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        //["low-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-1.html"}}],
        //["low-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-2.html"}}],
        //["low-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-3.html"}}],  
        //["low-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-4.html"}}],
        //["low-5", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-5.html"}}],
        //["low-6", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-6.html"}}],
        //["low-7", "Form", {continueMessage: "Click here to continue", html: {include: "low-7.html"}}],
        //["low-adj", "Form", {continueMessage: "Click here to continue", html: {include: "low-8-adj.html"}}],
        //["low-percentage", "Form", {html: {include: "low-9.html"}}],
        //["reasons", "Form", {html: {include: "reasons-subj.html"}}],
        //["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-subj.html"}}],
        //["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        //["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        //["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
    
        
        //subj-low-adv
        //["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        //["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        //["low-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-1.html"}}],
        //["low-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-2.html"}}],
        //["low-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-3.html"}}],  
        //["low-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-4.html"}}],
        //["low-5", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-5.html"}}],
        //["low-6", "Form", {continueMessage: "Click here to continue reading", html: {include: "low-6.html"}}],
        //["low-7", "Form", {continueMessage: "Click here to continue", html: {include: "low-7.html"}}],
        //["low-adv", "Form", {continueMessage: "Click here to continue", html: {include: "low-8-adv.html"}}],
        //["low-percentage", "Form", {html: {include: "low-9.html"}}],
        //["reasons", "Form", {html: {include: "reasons-subj.html"}}],
        //["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-subj.html"}}],
        //["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        //["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        //["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
        
        
        //subj-high-adj
        //["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        //["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        //["high-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-1.html"}}], 
        //["high-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-2.html"}}],
        //["high-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-3.html"}}],  
        //["high-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-4.html"}}], 
        //["high-5", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-5.html"}}], 
        //["high-6", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-6.html"}}], 
        //["high-7", "Form", {continueMessage: "Click here to continue", html: {include: "high-7.html"}}], 
        //["high-adj", "Form", {continueMessage: "Click here to continue", html: {include: "high-8-adj.html"}}], 
        //["high-percentage", "Form", {html: {include: "high-9.html"}}], 
        //["reasons", "Form", {html: {include: "reasons-subj.html"}}],
        //["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-subj.html"}}],
        //["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        //["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        //["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
        
    
        //subj-high-adv
        //["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        //["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        //["high-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-1.html"}}],
        //["high-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-2.html"}}],
        //["high-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-3.html"}}],  
        //["high-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-4.html"}}],
        //["high-5", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-5.html"}}],
        //["high-6", "Form", {continueMessage: "Click here to continue reading", html: {include: "high-6.html"}}],
        //["high-7", "Form", {continueMessage: "Click here to continue", html: {include: "high-7.html"}}],
        //["high-adv", "Form", {continueMessage: "Click here to continue", html: {include: "high-8-adv.html"}}],
        //["high-percentage", "Form", {html: {include: "high-9.html"}}],
        //["reasons", "Form", {html: {include: "reasons-subj.html"}}],
        //["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-subj.html"}}],
        //["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        //["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        //["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
        
     
        //obj-low-adj
        //["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        //["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        //["m10-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-1.html"}}],
        //["m10-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-2.html"}}],
        //["m10-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-3.html"}}],  
        //["m10-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-4.html"}}],
        //["m10-adj", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-5-adj.html"}}],
        //["reasons", "Form", {html: {include: "reasons-obj.html"}}],
        //["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-obj.html"}}],
        //["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        //["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        //["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
        
        
        //obj-low-adv
        //["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        //["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        //["m10-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-1.html"}}],
        //["m10-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-2.html"}}],
        //["m10-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-3.html"}}],  
        //["m10-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-4.html"}}],
        //["m10-adv", "Form", {continueMessage: "Click here to continue reading", html: {include: "m10-5-adv.html"}}],
        //["reasons", "Form", {html: {include: "reasons-obj.html"}}],
        //["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-obj.html"}}],
        //["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        //["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        //["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
        
        
        //obj-high-adj
        //["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        //["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        //["m95-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-1.html"}}],
        //["m95-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-2.html"}}],
        //["m95-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-3.html"}}],  
        //["m95-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-4.html"}}],
        //["m95-adj", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-5-adj.html"}}],
        //["reasons", "Form", {html: {include: "reasons-obj.html"}}],
        //["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-obj.html"}}],
        //["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        //["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        //["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
        
        
        //obj-high-adv
        ["consent", "Form", {continueMessage: "Click here to continue", html: {include: "consent.html"}}],    
        ["intro", "Form", {continueMessage: "Click here to begin the experiment", html: {include: "intro.html"}}],
        ["m95-1", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-1.html"}}],
        ["m95-2", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-2.html"}}],
        ["m95-3", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-3.html"}}],  
        ["m95-4", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-4.html"}}],
        ["m95-adv", "Form", {continueMessage: "Click here to continue reading", html: {include: "m95-5-adv.html"}}],
        ["reasons", "Form", {html: {include: "reasons-obj.html"}}],
        ["comprehension", "Form", {continueMessage: "Click here to continue", html: {include: "comprehension-obj.html"}}],
        ["comments", "Form", {continueMessage: "Click here to continue", html: {include: "comments.html"}}],
        ["demographics", "Form", {continueMessage: "Click here to continue", html: {include: "demographics.html"}}],
        ["identification", "Form", {consentRequired: true, continueMessage: "Click here to finish", html: {include: "identification.html"}}]
     
        
    ];





