$(document).ready(function() {
            
            
            /* dynamic word count for textarea */
            $('#textarea1').keyup(function(){
                var currentStr =  $(this).val();
                var v = currentStr.length;
//                result.innerHTML = (
//                    "<br>Characters (and spaces): "+ v.characters +
//                );
                if (v > 20) {
//                    var excessCharacters = currentStr.slice(50, v);
//                    var excessCharacters = currentStr.match(/.{20}(.*)/)[2];
//                    alert(excessCharacters);
//                    var newContent = currentStr.replace(excessCharacters, "<span class='highlightExcessChars'>" + excessCharacters + "</span>");
//                    currentStr.replace(/.{10}(.*)/g, '<span class="highlightExcessChars">#$1</span>');
                    var highlightStr = currentStr.replace(/.{20}(.*)/g, "<span class='highlightExcessChars'>$1<span>");
                    currentStr = currentStr.slice(0, 20) + highlightStr;
                    $(this).val(currentStr);
                    
//                    var newContent = currentStr.replace(excessCharacters, "hello");
//                    $('#sample').html(newContent);
//                    $('#sample').css({"colorExcessChars":"red"});
                }
                else {
                    $('#textarea1').css({"color":"black"});
                }
            });
            
//            $(document).ready(function()
//            {
//                $('twiter_textareas_selector').focus(function()
//                {
//                     $(this).css('border':'blue 3px solid');
//                }).blur(function()
//                {
//                     $(this).css('border':'gray 1px solid');
//                });
//            });
            
//            var wrapper = document.createElement('div');
//            var text = document.getElementById("textarea1");
//            var c_wrap = document.createElement('div');
//            var count = document.createElement('span');
//            
//            wrapper.style.position = 'relative';
//            c_wrap.style.position = 'absolute';
//            c_wrap.style.bottom = '8px';
//            c_wrap.style.color = '#ccc';
//            c_wrap.innerHTML = 'Char :';
//
//            text.parentNode.appendChild(wrapper);
//            wrapper.appendChild(text);
//
//            c_wrap.appendChild(count);
//            wrapper.appendChild(c_wrap);
//
//            text.style.color = "#ccc";
//            text.style.resize = "none";
//            text.style.height = "auto";
//            text.rows = "3";
//
//            function _set() {
//                c_wrap.style.left = (text.clientWidth - c_wrap.clientWidth - 12) + 'px';
//                count.innerHTML = this.value.length || 0;
//            }
//
//            text.addEventListener('input', _set);
//            _set.call(text);