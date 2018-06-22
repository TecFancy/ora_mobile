;(function(window, factory) {
  factory(window);
}(this, function(window) {
  
	/**
	 * 动态更新导师姓名
	*/
	var mentors = {
	  mentor001: '嘉伟111',
		mentor002: '茉言',
		mentor003: '阿苏',
		mentor004: '子叶',
		mentor005: '佳馨',
		mentor006: '皓霖',
		mentor007: '孑然',
		mentor008: '柒月',
		mentor009: 'Hope',
		mentor010: '谧沙'
	};

	var updateMentorName = function(targetDom, mentorName) {
		console.log(targetDom);
	  targetDom.textContent = mentors[mentorName];
	};

	var getMentorName = (function() {
	  let mentorsName = document.querySelectorAll('.mentorName');
		for (var i = 0, len = mentorsName.length; i < len; i++) {
		  (function(mentorName) {
				var target = mentorName;
				var className = mentorName.className.split(' ').reverse()[0];
				updateMentorName(target, className);
			}(mentorsName[i]));
		}
	}());

}));
