function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'module/skills/views/member.html',
        centroller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '1'
        }
    };
}