function skillsMember() {
    var member = document.getElementById('skills-member');
    var memberSkills = member.getElementsByClassName('skills-member');
    var memberSkillsLength = memberSkills.length;

    for (var i = 0; i < memberSkillsLength; i++) {
        memberSkills[i].style.height = memberSkills[i].offsetWidth + 'px';
    }
}