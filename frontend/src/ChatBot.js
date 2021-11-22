import React, {useState} from 'react'
import './ChatBot.css'

function ChatBot() {

const [def_question, setDef_question] = useState(null);

var messages = [], 
lastUserMessage = "", 
botMessage = "",
botName = 'ChatBot', 
chatbotreply = 'Here is a similar question.',
talking = true;
// beginMessage='hi, i am here to help you, you can ask me any doubt related covid 19 or novel corona virus, like what is covid 19, what are it\'s symptoms and it\'s preventions and so on' ;

function chatbotResponse() {
talking = true;
botMessage = "I don't understand :(";

lastUserMessage = lastUserMessage.toLowerCase();

if (lastUserMessage === 'hi' || lastUserMessage ==='hello' || lastUserMessage ==='hey' || lastUserMessage ==='hii') {
  const hi = ['hi, I am here to help you!','Hi','hello','Hey']
  botMessage = hi[Math.floor(Math.random()*(hi.length))];;
}

if(lastUserMessage.includes('what is covid 19') || lastUserMessage.includes('about covid 19') || lastUserMessage.includes('about covid-19') || lastUserMessage.includes('what is')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What is COVID-19?'+'</h6>'+'COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('symptoms')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What are the symptoms of COVID-19?'+'</h6>'+'The most common symptoms of COVID-19 are'+'<li>Fever</li><li>Dry cough</li><li>Fatigue</li><br>Other symptoms that are less common and may affect some patients include:<li>Loss of taste or smell,</li><li>Nasal congestion,</li><li>Conjunctivitis (also known as red eyes)</li><li>Sore throat,</li><li>Headache,</li><li>Muscle or joint pain,</li><li>Different types of skin rash,</li><li>Nausea or vomiting,</li><li>Diarrhea,</li><li>Chills or dizziness.</li><br/>Symptoms are usually mild. Some people become infected but only have very mild symptoms or none at all.<br/><br/>Symptoms of severe COVID‐19 disease include:<li>Shortness of breath,</li><li>Loss of appetite,</li><li>Confusion,</li><li>Persistent pain or pressure in the chest,</li><li>High temperature (above 38 °C).</li><br/>Other less common symptoms are:<li>Irritability,</li><li>Confusion,</li><li>Reduced consciousness (sometimes associated with seizures),</li><li>Anxiety,</li><li>Depression,</li><li>Sleep disorders,</li><li>More severe and rare neurological complications such as strokes, brain inflammation, delirium and nerve damage.</li>'+'<br/>People of all ages who experience fever and/or cough associated with difficulty breathing or shortness of breath, chest pain or pressure, or loss of speech or movement should seek medical care immediately. If possible, call your health care provider, hotline or health facility first, so you can be directed to the right clinic.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('seriously ill')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What happens to people who get seriously ill?'+'</h6>'+'Most people (about 80%) recover from the disease without needing hospital treatment. About 20% of those who get COVID-19 become seriously ill and require oxygen, with 5% becoming critically ill and needing intensive care.<br/><br/>Complications leading to death may include respiratory failure, acute respiratory distress syndrome (ARDS), sepsis and septic shock, thromboembolism, and/or multiorgan failure, including injury of the heart, liver or kidneys.<br/><br/>In rare situations, children can develop a severe inflammatory syndrome a few weeks after infection.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('most at risk') || lastUserMessage.includes('most risk')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'Who is most at risk of severe illness from COVID-19?'+'</h6>'+'People aged 60 and over, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, obesity or cancer, are at higher risk of developing serious illness. <br/><br/>However, anyone can get sick with COVID-19 and become seriously ill or die at any age. '+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('protect') || lastUserMessage.includes('protection') || lastUserMessage.includes('preventions') ||  lastUserMessage.includes('solution') ||lastUserMessage.includes('prevention') ||lastUserMessage.includes('prevent')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'How can we protect others and ourselves if we don\'t know who is infected?'+'</h6>'+'Stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('get test') || lastUserMessage.includes('get a test')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'When should I get a test for COVID-19?'+'</h6>'+'Anyone with symptoms should be tested, wherever possible. People who do not have symptoms but have had close contact with someone who is, or may be, infected may also consider testing – check with your local health guidelines. While a person is waiting for test results, they should remain isolated from others. Where testing capacity is limited, tests should first be done for those at higher risk of infection, such as health workers, and those at higher risk of severe illness such as older people, especially those living in seniors’ residences or long-term care facilities.'+'<br/><br/>'+'Source : WHO';
}
 
if(lastUserMessage.includes('what test should i get to see') || lastUserMessage.includes('what test') ||lastUserMessage.includes('which tests') || lastUserMessage.includes('which test')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What tests should I get to confirm I am having COVID-19?'+'</h6>'+'In most situations, a molecular test is used to detect SARS-CoV-2 and confirm COVID-19. Polymerase chain reaction (PCR) is the most commonly used molecular test. Samples are collected from the nose and/or throat with a swab. Molecular tests detect virus in the sample by amplifying viral genetic material to detectable levels. For this reason, a molecular test is used to confirm an active infection, usually within a few days of exposure and around the time that symptoms may begin. '+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('what about rapid tests') || lastUserMessage.includes('rapid tests') ||lastUserMessage.includes('rapid test')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What about rapid tests?'+'</h6>'+'Rapid tests (sometimes known as a rapid diagnostic test – RDT) detect viral proteins (known as antigens). Samples are collected from the nose and/or throat with a swab. These tests are cheaper than PCR and will offer results more quickly, although they are generally less accurate. We are still learning about how well they perform and when to use them.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('difference between isolation and quarantine') || lastUserMessage.includes('what is isolation') ||lastUserMessage.includes('what is quarantine')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What is the difference between isolation and quarantine?'+'</h6>'+'Both isolation and quarantine are methods of preventing the spread of the disease. <br/><br/> Quarantine means restricting activities and/or separating people who are not ill but may have been exposed to COVID-19. The quarantine can take place in a designated facility or at home for 14 days. <br/><br/>Isolation means separating people who are ill with symptoms of COVID-19 and/or have tested positive.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('come in contact') || lastUserMessage.includes('came in contact') ||lastUserMessage.includes('came in my contact') || lastUserMessage.includes('come in my contact') ||lastUserMessage.includes('come in close contact')|| lastUserMessage.includes('exposed to someone')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What should I do if I have been exposed to someone who has COVID-19 ?'+'</h6>'+'If you have been exposed to someone with COVID-19, you may become infected, even if you feel well.<br/><br/>After exposure to someone who has COVID-19, do the following:<li>Call your health care provider or COVID-19 hotline to find out where and when to get a test.</li><li>Cooperate with contact-tracing procedures to stop the spread of the virus.</li><li>If testing is not available, stay home and away from others for 14 days.</li><li>During this time, do not go to work, to school or to public places. Ask someone to bring you supplies.</li><li>Keep at least a 1-metre distance from others, even from your family members.</li><li>Wear a medical mask to protect others, including if/when you need to seek medical care.</li><li>Clean your hands frequently.</li><li>Stay in a separate room from other family members, and if not possible, wear a medical mask.</li><li>Keep the room well-ventilated.</li><li>If you share a room, place beds at least 1 metre apart.</li><li>Monitor yourself for any symptoms for 14 days. </li><li>Stay positive by keeping in touch with loved ones by phone or online, and by exercising at home.</li><br/>If you live in an area with malaria or dengue fever, seek medical help if you have a fever. While travelling to and from the health facility and during medical care, wear a mask, keep at least a 1-metre distance from other people and avoid touching surfaces with your hands. This applies to adults and children.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('develop symptoms')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'How long does it take to develop symptoms?'+'</h6>'+'The time from exposure to COVID-19 to the moment when symptoms begin is, on average, 5-6 days and can range from 1-14 days. This is why people who have been exposed to the virus are advised to stay home, apart from others, for 14 days, in order to prevent the spread of the virus, especially where testing is not easily available.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('if i have covid-19 symptoms') || lastUserMessage.includes('if i have symptoms') || lastUserMessage.includes('if i found symptoms')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What should I do if I have COVID-19 symptoms ?'+'</h6>'+'If you have any symptoms suggestive of COVID-19, contact your health care provider or COVID-19 hotline for instructions and find out when and where to get a test, stay at home for 14 days away from others and monitor your health.<br/><br/>If you have shortness of breath or pain or pressure in the chest, seek medical attention immediately. Call your health care provider or hotline in advance for direction to the right health facility.<br/><br/>If you live in an area with malaria or dengue fever, seek medical care if you have a fever.<br/><br/>If local guidance recommends visiting a medical centre for testing, assessment or isolation, wear a medical mask while travelling to and from the facility and during medical care. Also keep at least a 1-metre distance from other people and avoid touching surfaces with your hands.  This applies to adults and children.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('who should get covid vaccine first') || lastUserMessage.includes('vaccine get') || lastUserMessage.includes('get first vaccine')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'As with all COVID-19 vaccines, health workers at high risk of exposure and older people should be prioritized for vaccination.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('there a vaccine') || lastUserMessage.includes('vaccine available')|| lastUserMessage.includes('vaccine')) {
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'Is there any vaccine available for COVID-19?'+'</h6>'+'yes there is vaccine for covid-19 .Vaccines save millions of lives each year. Vaccines work by training and preparing the body’s natural defences – the immune system – to recognize and fight off the viruses and bacteria they target. After vaccination, if the body is later exposed to those disease-causing germs, the body is immediately ready to destroy them, preventing illness.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('Covidsheild ') || lastUserMessage.includes('covidshield') || lastUserMessage.includes('CovidShield') || lastUserMessage.includes('COVIDSHIELD') ){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What is covidsheild?'+'</h6>'+'Serum Institute of India COVID-19 vaccine, called Covishield, is a version of the Oxford-AstraZeneca vaccine that manufacturers in India produce locally. '+'<br/><br/>'+'Source : WHO';
}


if(lastUserMessage.includes('safe is vaccine') || lastUserMessage.includes('safe vaccine') ){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'How safe is Covid vaccine?'+'</h6>'+'COVID-19 vaccines are safe, and getting vaccinated will help protect you against developing severe COVID-19 disease and dying from COVID-19. You may experience some mild side effects after getting vaccinated, which are signs that your body is building protection.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('side effects of vaccine ') || lastUserMessage.includes('side effects') ){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'What are side effects of Covishield vaccine?'+'</h6>'+'Minor and temporary adverse events, such as headache, fever, fatigue or pain at the injection site are common after all vaccinations. People should seek medical attention if they experience any persistent, new or worsening symptoms.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('How long does the Covid vaccine protect you? ') || lastUserMessage.includes('vaccine protect you') ){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'How long does the vaccine protect us from COVID-19?'+'</h6>'+'"There is at least for six months. This does not mean only six months, it means at least six months. Most scientists believe the protection will last substantially longer," Dr. Shah said.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('treatments') || lastUserMessage.includes('treatment')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'Are there treatments for COVID-19?'+'</h6>'+'There is no specific treatment for disease caused by novel coronavirus. However, many of the symptoms caused by this virus can be treated and therefore treatment should be based on the symptoms of the patient. Moreover, supportive care for infected persons can be highly effective.'+'<br/><br/>'+'Source : WHO';
}

if(lastUserMessage.includes('antibiotics') || lastUserMessage.includes('anti-biotics') || lastUserMessage.includes('antibiotic')){
  botMessage = '<br>'+'Here is a similar question:'+'<br><br>'+'<h6>'+'Are antibiotics effective in preventing or treating COVID-19?'+'</h6>'+'Antibiotics do not work against viruses; they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19.<br/><br/>In hospitals, physicians will sometimes use antibiotics to prevent or treat secondary bacterial infections which can be a complication of COVID-19 in severely ill patients. They should only be used as directed by a physician to treat a bacterial infection.'+'<br/><br/>'+'Source : WHO';
}

}


function newEntry() {

if (document.getElementById("chatbox").value !=="") {
  lastUserMessage = document.getElementById("chatbox").value;
  document.getElementById("chatbox").value = "";
  messages.push("<b>" + "You" + ": </b> " + lastUserMessage);
  chatbotResponse();
  messages.push("<b>" + botName + ": </b> " + botMessage);
  if(lastUserMessage === 'hi' || lastUserMessage ==='hello' || lastUserMessage ==='hey' || lastUserMessage ==='hii'){ 
    Speech(botMessage);
  }
  else if(botMessage==="I don't understand :("){
    Speech(botMessage);
  }
  else{
    Speech(chatbotreply);
  }
  for (var i = 1; i < 6; i++) {
    if (messages[messages.length - i])
      document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
  }
}
}


function Speech(say) {
if ('speechSynthesis' in window && talking) {
  var utterance = new SpeechSynthesisUtterance(say);
  speechSynthesis.speak(utterance);
}
}

document.onkeypress = keyPress;
function keyPress(e) {
var x = e || window.event;
var key = (x.keyCode || x.which);
if (key === 13 || key === 3) {
  newEntry();
  setDef_question(null);
}
if (key === 38) {
  console.log('hi')
}
}


    return (
        <div id='bodybox'>
            <div class="chat-header">
              <img src="images/chatbot.png" alt="faulty"/><h4>COVID-19 FAQ Bot</h4>
            </div>
            <div id='chatborder'>
              <p id="chatlog9">&nbsp;</p>
              <p id="chatlog8" className="chatlog">
                <p className="container">Most Common Questions:</p> 
                <div className="container cards">
                  <div class="card_q" onClick={e => setDef_question('what is covid-19?')}>
                    what is covid-19?
                  </div>
                  <div className="card_q" onClick={e => setDef_question('what are the symptoms of covid-19?')}>
                    what are the symptoms of covid-19?
                  </div>
                  <div className="card_q" onClick={e => setDef_question('What should I do if I have COVID-19 symptoms?')}>
                    What should I do if I have COVID-19 symptoms?
                  </div>
                </div>
              </p>
              <p id="chatlog7" className="chatlog">
                <div className="container cards">
                  <div className="card_q" onClick={e => setDef_question('How can we protect others and ourselves if we don\'t know who is infected?')}>
                    How can we protect others and ourselves if we don't know who is infected?
                  </div>
                  <div className="card_q" onClick={e => setDef_question('What should I do if I have been exposed to someone who has COVID-19?')}>
                    What should I do if I have been exposed to someone who has COVID-19?
                  </div>
                </div>
              </p>
              <p id="chatlog6" className="chatlog"><div className="container cards">
                <div className="card_q" onClick={e => setDef_question('Are there treatments for COVID-19?')}>
                  Are there treatments for COVID-19?
                </div>
                <div className="card_q" onClick={e => setDef_question('What are side effects of Covishield vaccine?')}>
                  What are side effects of Covishield vaccine?
                </div>
                <div className="card_q" onClick={e => setDef_question('Who is most at risk of severe illness from COVID-19?')}>
                  Who is most at risk of severe illness from COVID-19?
                </div>
              </div></p>
              <p id="chatlog5" className="chatlog">&nbsp;</p>
              <p id="chatlog4" className="chatlog">&nbsp;</p>
              <p id="chatlog3" className="chatlog">&nbsp;</p>
              <p id="chatlog2" className="chatlog">&nbsp;</p>
              <p id="chatlog1" className="chatlog">&nbsp;</p>
              <hr/>
              <input type="text" name="chat" id="chatbox" placeholder="Ask About Covid-19" value={def_question}></input>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default ChatBot
