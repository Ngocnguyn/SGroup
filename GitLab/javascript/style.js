const leaderPanel = document.getElementById('leaderspanel');
      researchPanel = document.getElementById('researchpanel');
      tabLeader = document.getElementById('tab-leaders');
      tabResearch = document.getElementById('tab-research');
if(tabLeader){
    tabLeader.addEventListener('click', () => {
        tabLeader.classList.add('selected');
        tabResearch.classList.remove('selected');
        leaderPanel.classList.add('active');
        researchPanel.classList.remove('active');
    })
}
if(tabResearch){
    tabResearch.addEventListener('click', () => {
        researchPanel.classList.add('active');
        leaderPanel.classList.remove('active');
        tabLeader.classList.remove('selected');
        tabResearch.classList.add('selected');
    })
}