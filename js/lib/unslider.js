(function(a,b){if(!a)return b;var c=function n(){this.el=b,this.items=b,this.sizes=[],this.max=[0,0],this.current=0,this.interval=b,this.opts={speed:500,delay:3e3,complete:b,keys:!b,dots:b,fluid:b};var d=this;this.init=function(f,g){return this.el=f,this.ul=f.children("ul"),this.max=[f.outerWidth(),f.outerHeight()],this.items=this.ul.children("li").each(this.calculate),this.opts=a.extend(this.opts,g),this.setup(),this},this.calculate=function(f){var g=a(this),h=g.outerWidth(),j=g.outerHeight();d.sizes[f]=[h,j],h>d.max[0]&&(d.max[0]=h),j>d.max[1]&&(d.max[1]=j)},this.setup=function(){if(this.el.css({overflow:"hidden",width:d.max[0],height:this.items.first().outerHeight()}),this.ul.css({width:100*this.items.length+"%",position:"relative"}),this.items.css("width",100/this.items.length+"%"),this.opts.delay!==b&&(this.start(),this.el.hover(this.stop,this.start)),this.opts.keys&&a(document).keydown(this.keys),this.opts.dots&&this.dots(),this.opts.fluid){var f=function(){d.el.css("width",Math.min(Math.round(100*(d.el.outerWidth()/d.el.parent().outerWidth())),100)+"%")};f(),a(window).resize(f)}this.opts.arrows&&this.el.parent().append("<p class=\"arrows\"><span class=\"prev\">\u2190</span><span class=\"next\">\u2192</span></p>").find(".arrows span").click(function(){a.isFunction(d[this.className])&&d[this.className]()}),a.event.swipe&&this.el.on("swipeleft",d.prev).on("swiperight",d.next)},this.move=function(f,g){this.items.eq(f).length||(f=0),0>f&&(f=this.items.length-1);var h=this.items.eq(f),j={height:h.outerHeight()},k=g?5:this.opts.speed;this.ul.is(":animated")||(d.el.find(".dot:eq("+f+")").addClass("active").siblings().removeClass("active"),this.el.animate(j,k)&&this.ul.animate(a.extend({left:"-"+f+"00%"},j),k,function(){d.current=f,a.isFunction(d.opts.complete)&&!g&&d.opts.complete(d.el)}))},this.start=function(){d.interval=setInterval(function(){d.move(d.current+1)},d.opts.delay)},this.stop=function(){return d.interval=clearInterval(d.interval),d},this.keys=function(f){var g=f.which,h={37:d.prev,39:d.next,27:d.stop};a.isFunction(h[g])&&h[g]()},this.next=function(){return d.stop().move(d.current+1)},this.prev=function(){return d.stop().move(d.current-1)},this.dots=function(){var f="<ol class=\"dots\">";a.each(this.items,function(g){f+="<li class=\"dot"+(1>g?" active":"")+"\">"+(g+1)+"</li>"}),f+="</ol>",this.el.addClass("has-dots").append(f).find(".dot").click(function(){d.move(a(this).index())})}};a.fn.unslider=function(d){var f=this.length;return this.each(function(g){var h=a(this),j=new c().init(h,d);h.data("unslider"+(1<f?"-"+(g+1):""),j)})}})(window.jQuery,!1);