
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const okay = document.getElementById('okay');
let answer = document.getElementById('answer');
let count = document.getElementById('count');
const isCorrected = document.getElementById('isCorrected');

//modal.classList.remove('hidden');

const old1 = [
{q:' どちらが古い？',c:['日米和親条約で２港開港','日米修好通商条約で５港開港']},
{q:' どちらが古い？',c:['台湾出兵','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['板垣退助がフランス流の自由党','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['九州で西郷隆盛が西南戦争','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['九州で西郷隆盛が西南戦争','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','廃藩置県']},
{q:' どちらが古い？',c:['大隈重信がイギリス流の立憲改進党','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','桜田門外の変で井伊直弼を暗殺']},
{q:' どちらが古い？',c:['版籍奉還','台湾出兵']},
{q:' どちらが古い？',c:['台湾出兵','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','版籍奉還']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','坂本龍馬が薩長同盟']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','版籍奉還']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','徴兵令・地租改正']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','徳川慶喜が大政奉還']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','戊辰戦争・五箇条の御誓文']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','台湾出兵']},
{q:' どちらが古い？',c:['版籍奉還','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['版籍奉還','廃藩置県']},
{q:' どちらが古い？',c:['版籍奉還','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['朝鮮沿岸で江華島事件','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','戊辰戦争・五箇条の御誓文']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','徳川慶喜が大政奉還']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['朝鮮沿岸で江華島事件','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['板垣退助がフランス流の自由党','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','坂本龍馬が薩長同盟']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','徳川慶喜が大政奉還']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','日米和親条約で２港開港']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['版籍奉還','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['版籍奉還','徴兵令・地租改正']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','徳川慶喜が大政奉還']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','廃藩置県']},
{q:' どちらが古い？',c:['徴兵令・地租改正','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','徴兵令・地租改正']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','戊辰戦争・五箇条の御誓文']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['廃藩置県','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['朝鮮沿岸で江華島事件','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['版籍奉還','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','版籍奉還']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','戊辰戦争・五箇条の御誓文']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','版籍奉還']},
{q:' どちらが古い？',c:['板垣退助がフランス流の自由党','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','廃藩置県']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','版籍奉還']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['廃藩置県','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['廃藩置県','徴兵令・地租改正']},
{q:' どちらが古い？',c:['台湾出兵','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['徴兵令・地租改正','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','台湾出兵']},
{q:' どちらが古い？',c:['徴兵令・地租改正','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','徳川慶喜が大政奉還']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','日米修好通商条約で５港開港']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','版籍奉還']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','版籍奉還']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','台湾出兵']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','井伊直弼が安政の大獄']},
{q:' どちらが古い？',c:['伊藤博文が内閣総理大臣','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['版籍奉還','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['朝鮮沿岸で江華島事件','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','廃藩置県']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['徴兵令・地租改正','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['版籍奉還','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','坂本龍馬が薩長同盟']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['九州で西郷隆盛が西南戦争','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','廃藩置県']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','徴兵令・地租改正']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','桜田門外の変で井伊直弼を暗殺']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','井伊直弼が安政の大獄']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','戊辰戦争・五箇条の御誓文']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','戊辰戦争・五箇条の御誓文']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['廃藩置県','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['台湾出兵','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','台湾出兵']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','徴兵令・地租改正']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','台湾出兵']},
{q:' どちらが古い？',c:['朝鮮沿岸で江華島事件','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','徴兵令・地租改正']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','桜田門外の変で井伊直弼を暗殺']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['徴兵令・地租改正','台湾出兵']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','廃藩置県']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','坂本龍馬が薩長同盟']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','台湾出兵']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','大隈重信がイギリス流の立憲改進党']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','台湾出兵']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','徴兵令・地租改正']},
{q:' どちらが古い？',c:['徴兵令・地租改正','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['廃藩置県','台湾出兵']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','徴兵令・地租改正']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['九州で西郷隆盛が西南戦争','板垣退助がフランス流の自由党']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','廃藩置県']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['戊辰戦争・五箇条の御誓文','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['ペリーが浦賀に来航','桜田門外の変で井伊直弼を暗殺']},
{q:' どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','廃藩置県']},
{q:' どちらが古い？',c:['台湾出兵','九州で西郷隆盛が西南戦争']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','井伊直弼が安政の大獄']},
{q:' どちらが古い？',c:['台湾出兵','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','徳川慶喜が大政奉還']},
{q:' どちらが古い？',c:['日米和親条約で２港開港','坂本龍馬が薩長同盟']},
{q:' どちらが古い？',c:['大隈重信がイギリス流の立憲改進党','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['廃藩置県','大日本帝国憲法発布']},
{q:' どちらが古い？',c:['徳川慶喜が大政奉還','版籍奉還']},
{q:' どちらが古い？',c:['廃藩置県','朝鮮沿岸で江華島事件']},
{q:' どちらが古い？',c:['坂本龍馬が薩長同盟','徴兵令・地租改正']},
{q:' どちらが古い？',c:['廃藩置県','伊藤博文が内閣総理大臣']},
{q:' どちらが古い？',c:['日米修好通商条約で５港開港','台湾出兵']},
{q:' どちらが古い？',c:['井伊直弼が安政の大獄','戊辰戦争・五箇条の御誓文']},
{q:' どちらが古い？',c:['徴兵令・地租改正','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['台湾出兵','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['板垣退助がフランス流の自由党','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['九州で西郷隆盛が西南戦争','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['九州で西郷隆盛が西南戦争','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','廃藩置県']},
{q:'どちらが古い？',c:['大隈重信がイギリス流の立憲改進党','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','桜田門外の変で井伊直弼を暗殺']},
{q:'どちらが古い？',c:['版籍奉還','台湾出兵']},
{q:'どちらが古い？',c:['台湾出兵','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','版籍奉還']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','坂本龍馬が薩長同盟']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','版籍奉還']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','徴兵令・地租改正']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','徳川慶喜が大政奉還']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','戊辰戦争・五箇条の御誓文']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','台湾出兵']},
{q:'どちらが古い？',c:['版籍奉還','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['版籍奉還','廃藩置県']},
{q:'どちらが古い？',c:['版籍奉還','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['朝鮮沿岸で江華島事件','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','戊辰戦争・五箇条の御誓文']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','徳川慶喜が大政奉還']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['朝鮮沿岸で江華島事件','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['板垣退助がフランス流の自由党','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','坂本龍馬が薩長同盟']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','徳川慶喜が大政奉還']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','日米和親条約で２港開港']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['版籍奉還','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['版籍奉還','徴兵令・地租改正']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','徳川慶喜が大政奉還']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','廃藩置県']},
{q:'どちらが古い？',c:['徴兵令・地租改正','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','徴兵令・地租改正']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','戊辰戦争・五箇条の御誓文']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['廃藩置県','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['朝鮮沿岸で江華島事件','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['版籍奉還','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','版籍奉還']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','戊辰戦争・五箇条の御誓文']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','版籍奉還']},
{q:'どちらが古い？',c:['板垣退助がフランス流の自由党','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','廃藩置県']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','版籍奉還']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['廃藩置県','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['廃藩置県','徴兵令・地租改正']},
{q:'どちらが古い？',c:['台湾出兵','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['徴兵令・地租改正','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','台湾出兵']},
{q:'どちらが古い？',c:['徴兵令・地租改正','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','徳川慶喜が大政奉還']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','日米修好通商条約で５港開港']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','版籍奉還']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','版籍奉還']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','台湾出兵']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','井伊直弼が安政の大獄']},
{q:'どちらが古い？',c:['伊藤博文が内閣総理大臣','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['版籍奉還','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['朝鮮沿岸で江華島事件','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','廃藩置県']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['徴兵令・地租改正','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['版籍奉還','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','坂本龍馬が薩長同盟']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['九州で西郷隆盛が西南戦争','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','廃藩置県']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','徴兵令・地租改正']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','桜田門外の変で井伊直弼を暗殺']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','井伊直弼が安政の大獄']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','戊辰戦争・五箇条の御誓文']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','戊辰戦争・五箇条の御誓文']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['廃藩置県','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['台湾出兵','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','台湾出兵']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','徴兵令・地租改正']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','台湾出兵']},
{q:'どちらが古い？',c:['朝鮮沿岸で江華島事件','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','徴兵令・地租改正']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','桜田門外の変で井伊直弼を暗殺']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['徴兵令・地租改正','台湾出兵']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','廃藩置県']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','坂本龍馬が薩長同盟']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','台湾出兵']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','台湾出兵']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','徴兵令・地租改正']},
{q:'どちらが古い？',c:['徴兵令・地租改正','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['廃藩置県','台湾出兵']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','徴兵令・地租改正']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['九州で西郷隆盛が西南戦争','板垣退助がフランス流の自由党']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','廃藩置県']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['戊辰戦争・五箇条の御誓文','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['ペリーが浦賀に来航','桜田門外の変で井伊直弼を暗殺']},
{q:'どちらが古い？',c:['桜田門外の変で井伊直弼を暗殺','廃藩置県']},
{q:'どちらが古い？',c:['台湾出兵','九州で西郷隆盛が西南戦争']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','井伊直弼が安政の大獄']},
{q:'どちらが古い？',c:['台湾出兵','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','徳川慶喜が大政奉還']},
{q:'どちらが古い？',c:['日米和親条約で２港開港','坂本龍馬が薩長同盟']},
{q:'どちらが古い？',c:['大隈重信がイギリス流の立憲改進党','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['廃藩置県','大日本帝国憲法発布']},
{q:'どちらが古い？',c:['徳川慶喜が大政奉還','版籍奉還']},
{q:'どちらが古い？',c:['廃藩置県','朝鮮沿岸で江華島事件']},
{q:'どちらが古い？',c:['坂本龍馬が薩長同盟','徴兵令・地租改正']},
{q:'どちらが古い？',c:['廃藩置県','伊藤博文が内閣総理大臣']},
{q:'どちらが古い？',c:['日米修好通商条約で５港開港','台湾出兵']},
{q:'どちらが古い？',c:['井伊直弼が安政の大獄','戊辰戦争・五箇条の御誓文']},
{q:'どちらが古い？',c:['徴兵令・地租改正','大隈重信がイギリス流の立憲改進党']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','国際連合に加盟']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','日中戦争']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','五・一五事件で犬養毅暗殺']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','農地改革で自作農増加']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['国家総動員法','東海道新幹線が開通・']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','満州事変。柳条湖で鉄道爆破']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','大阪で万国博覧会']},
{q:'どちらが古い？',c:['日中戦争','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['農地改革で自作農増加','東海道新幹線が開通・']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','ドイツがポーランド侵攻']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','沖縄返還。']},
{q:'どちらが古い？',c:['日中戦争','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['国際連盟脱退','ドイツがポーランド侵攻']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','広島・長崎に原爆投下']},
{q:'どちらが古い？',c:['国家総動員法','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','東海道新幹線が開通・']},
{q:'どちらが古い？',c:['農地改革で自作農増加','沖縄返還。']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','日中戦争']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','ポツダム宣言']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','東海道新幹線が開通・']},
{q:'どちらが古い？',c:['国際連盟脱退','日本軍が真珠湾攻撃']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','大阪で万国博覧会']},
{q:'どちらが古い？',c:['日中戦争','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['広島・長崎に原爆投下','沖縄返還。']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','広島・長崎に原爆投下']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','国際連合に加盟']},
{q:'どちらが古い？',c:['ポツダム宣言','東海道新幹線が開通・']},
{q:'どちらが古い？',c:['日中戦争','国際連合に加盟']},
{q:'どちらが古い？',c:['日中戦争','日独伊三国同盟・大政翼賛会']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['広島・長崎に原爆投下','農地改革で自作農増加']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['農地改革で自作農増加','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['日中戦争','沖縄返還。']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','国際連盟脱退']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['沖縄返還。','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['農地改革で自作農増加','大阪で万国博覧会']},
{q:'どちらが古い？',c:['国家総動員法','沖縄返還。']},
{q:'どちらが古い？',c:['広島・長崎に原爆投下','東海道新幹線が開通・']},
{q:'どちらが古い？',c:['国際連盟脱退','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','日本軍が真珠湾攻撃']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','ポツダム宣言']},
{q:'どちらが古い？',c:['国家総動員法','ドイツがポーランド侵攻']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','農地改革で自作農増加']},
{q:'どちらが古い？',c:['国際連盟脱退','ポツダム宣言']},
{q:'どちらが古い？',c:['東京オリンピック(1964)','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['大阪で万国博覧会','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['ポツダム宣言','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','日独伊三国同盟・大政翼賛会']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','二・二六事件。首相官邸をおそう']},
{q:'どちらが古い？',c:['東海道新幹線が開通・','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['国家総動員法','大阪で万国博覧会']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','国家総動員法']},
{q:'どちらが古い？',c:['農地改革で自作農増加','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','農地改革で自作農増加']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','日本軍が真珠湾攻撃']},
{q:'どちらが古い？',c:['国家総動員法','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','五・一五事件で犬養毅暗殺']},
{q:'どちらが古い？',c:['国際連盟脱退','国際連合に加盟']},
{q:'どちらが古い？',c:['東京オリンピック(1964)','沖縄返還。']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','国際連合に加盟']},
{q:'どちらが古い？',c:['国家総動員法','ポツダム宣言']},
{q:'どちらが古い？',c:['東京オリンピック(1964)','大阪で万国博覧会']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','日中戦争']},
{q:'どちらが古い？',c:['国際連合に加盟','大阪で万国博覧会']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','国家総動員法']},
{q:'どちらが古い？',c:['国際連盟脱退','農地改革で自作農増加']},
{q:'どちらが古い？',c:['ポツダム宣言','国際連合に加盟']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','沖縄返還。']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['国際連盟脱退','二・二六事件。首相官邸をおそう']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','日独伊三国同盟・大政翼賛会']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','農地改革で自作農増加']},
{q:'どちらが古い？',c:['国際連盟脱退','沖縄返還。']},
{q:'どちらが古い？',c:['広島・長崎に原爆投下','国際連合に加盟']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','大阪で万国博覧会']},
{q:'どちらが古い？',c:['ポツダム宣言','農地改革で自作農増加']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','ドイツがポーランド侵攻']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','日本軍が真珠湾攻撃']},
{q:'どちらが古い？',c:['国際連盟脱退','国家総動員法']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','東海道新幹線が開通・']},
{q:'どちらが古い？',c:['ポツダム宣言','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['国家総動員法','日独伊三国同盟・大政翼賛会']},
{q:'どちらが古い？',c:['吉田茂がサンフランシスコ平和条約と日米安全保障条約','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','国際連盟脱退']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','沖縄返還。']},
{q:'どちらが古い？',c:['日中戦争','農地改革で自作農増加']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','国際連合に加盟']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','国際連合に加盟']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','広島・長崎に原爆投下']},
{q:'どちらが古い？',c:['国際連盟脱退','広島・長崎に原爆投下']},
{q:'どちらが古い？',c:['国際連盟脱退','日中戦争']},
{q:'どちらが古い？',c:['国際連盟脱退','日独伊三国同盟・大政翼賛会']},
{q:'どちらが古い？',c:['国家総動員法','国際連合に加盟']},
{q:'どちらが古い？',c:['国家総動員法','農地改革で自作農増加']},
{q:'どちらが古い？',c:['広島・長崎に原爆投下','大阪で万国博覧会']},
{q:'どちらが古い？',c:['東海道新幹線が開通','沖縄返還。']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','二・二六事件。首相官邸をおそう']},
{q:'どちらが古い？',c:['農地改革で自作農増加','国際連合に加盟']},
{q:'どちらが古い？',c:['農地改革で自作農増加','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','農地改革で自作農増加']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','日独伊三国同盟・大政翼賛会']},
{q:'どちらが古い？',c:['国家総動員法','日本軍が真珠湾攻撃']},
{q:'どちらが古い？',c:['広島・長崎に原爆投下','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','ポツダム宣言']},
{q:'どちらが古い？',c:['国家総動員法','広島・長崎に原爆投下']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','沖縄返還。']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','国際連盟脱退']},
{q:'どちらが古い？',c:['吉田茂がサンフランシスコ平和条約と日米安全保障条約','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['国際連合に加盟','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','農地改革で自作農増加']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','日独伊三国同盟・大政翼賛会']},
{q:'どちらが古い？',c:['国際連合に加盟','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['日中戦争','国家総動員法']},
{q:'どちらが古い？',c:['大阪で万国博覧会','沖縄返還。']},
{q:'どちらが古い？',c:['国際連合に加盟','東海道新幹線が開通']},
{q:'どちらが古い？',c:['ポツダム宣言','大阪で万国博覧会']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','広島・長崎に原爆投下']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','日本軍が真珠湾攻撃']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','大阪で万国博覧会']},
{q:'どちらが古い？',c:['東海道新幹線が開通','大阪で万国博覧会']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','沖縄返還。']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','国家総動員法']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','沖縄返還。']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','日中戦争']},
{q:'どちらが古い？',c:['ポツダム宣言','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['国際連盟脱退','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['広島・長崎に原爆投下','ポツダム宣言']},
{q:'どちらが古い？',c:['日中戦争','東海道新幹線が開通']},
{q:'どちらが古い？',c:['国際連盟脱退','大阪で万国博覧会']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','佐藤栄作が非核三原則']},
{q:'どちらが古い？',c:['ポツダム宣言','沖縄返還。']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','吉田茂がサンフランシスコ平和条約と日米安全保障条約']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','国際連合に加盟']},
{q:'どちらが古い？',c:['満州事変。柳条湖で鉄道爆破','ドイツがポーランド侵攻']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','農地改革で自作農増加']},
{q:'どちらが古い？',c:['二・二六事件。首相官邸をおそう','東京オリンピック(1964)']},
{q:'どちらが古い？',c:['日独伊三国同盟・大政翼賛会','日本軍が真珠湾攻撃']},
{q:'どちらが古い？',c:['ドイツがポーランド侵攻','大阪で万国博覧会']},
{q:'どちらが古い？',c:['五・一五事件で犬養毅暗殺','沖縄返還。']},
{q:'どちらが古い？',c:['ニューヨークで世界恐慌','国家総動員法']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','沖縄返還。']},
{q:'どちらが古い？',c:['日本軍が真珠湾攻撃','東京オリンピック(1964)']},

];


function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;

let form = document.forms[0];
let selectbox = form.selectbox;

selectbox.addEventListener('change', ()=> {
}, false);

let a = 0;
let h = 0;
let end = 0; 
let QuizBuild = 0;
let cn = 0;


selectbox.onchange = function(){
if(selectbox.value === "old-1"){  QuizBuild = old1; a=0; end = 19;  Quizset();  }
else if(selectbox.value === "old-2"){  QuizBuild = old1; a=20; end = 39;  Quizset();  }
else if(selectbox.value === "old-3"){  QuizBuild = old1; a=40; end = 59;  Quizset();  }
else if(selectbox.value === "old-4"){  QuizBuild = old1; a=60; end = 79;  Quizset();  }
else if(selectbox.value === "old-5"){  QuizBuild = old1; a=80; end = 99;  Quizset();  }
else if(selectbox.value === "old-6"){  QuizBuild = old1; a=100; end = 119;  Quizset();  }
else if(selectbox.value === "old-7"){  QuizBuild = old1; a=120; end = 139;  Quizset();  }
else if(selectbox.value === "old-8"){  QuizBuild = old1; a=140; end = 159;  Quizset();  }
else if(selectbox.value === "old-9"){  QuizBuild = old1; a=160; end = 179;  Quizset();  }
else if(selectbox.value === "old-10"){  QuizBuild = old1; a=180; end = 199;  Quizset();  }
else if(selectbox.value === "old-11"){  QuizBuild = old1; a=200; end = 219;  Quizset();  }
else if(selectbox.value === "old-12"){  QuizBuild = old1; a=220; end = 239;  Quizset();  }
else if(selectbox.value === "old-13"){  QuizBuild = old1; a=240; end = 259;  Quizset();  }
else if(selectbox.value === "old-14"){  QuizBuild = old1; a=260; end = 279;  Quizset();  }
else if(selectbox.value === "old-15"){  QuizBuild = old1; a=280; end = 299;  Quizset();  }
else if(selectbox.value === "old-16"){  QuizBuild = old1; a=300; end = 319;  Quizset();  }
else if(selectbox.value === "old-17"){  QuizBuild = old1; a=320; end = 339;  Quizset();  }
else if(selectbox.value === "old-18"){  QuizBuild = old1; a=340; end = 359;  Quizset();  }
else if(selectbox.value === "old-19"){  QuizBuild = old1; a=360; end = 379;  Quizset();  }
else if(selectbox.value === "old-20"){  QuizBuild = old1; a=380; end = 399;  Quizset();  }
else if(selectbox.value === "old-21"){  QuizBuild = old1; a=400; end = 419;  Quizset();  }
else if(selectbox.value === "old-22"){  QuizBuild = old1; a=420; end = 439;  Quizset();  }
else if(selectbox.value === "old-23"){  QuizBuild = old1; a=440; end = 459;  Quizset();  }
else if(selectbox.value === "old-24"){  QuizBuild = old1; a=460; end = 479;  Quizset();  }

  else{
    location.reload();
  }
 
  function Quizset () {
   // let rand = Math.floor(Math.random() * QuizBuild.length + 1) ;
// alert(rand);
    choice1.removeEventListener('click',event);
  Qnum.textContent = `No.${a + 1}`;
  question.textContent = QuizBuild[a].q;
    
    while(choice1.firstChild){
  choice1.removeChild(choice1.firstChild);
  }
  
  item1.textContent = QuizBuild[a].c[0];
  const ul1 = document.querySelector('ul');
    ul1.appendChild(item1);
  
    item2.textContent = QuizBuild[a].c[1];
    const ul = document.querySelector('ul');
      ul.appendChild(item2);
  
       function shuffle() {
        const x = Math.floor(Math.random() * 2 + 1) ;
        if(x == 1){ 
          ul.insertBefore(item2,item1);
        }else{
          ul.insertBefore(item1,item2);
        }
      }
      shuffle();
  
      function checkAnswer(){
          
        let event = function(e){
          let t = e.target;
    


          if(t == item1){
    
          modal3.classList.remove('hidden');
          isCorrected.textContent = `正解！`;  
          cn++;
          setTimeout(()=>{
            modal3.classList.add('hidden');
  
            choice1.removeEventListener('click',event);
            //alert(end-2);

              if(a > end-1 ){
                modal.classList.remove('hidden');
                count.textContent = ` 得点は ${cn} /${20} です。`;
    
                close.addEventListener('click',()=>{
                  location.reload();
              })
         
            }else{
                //次の問題へ
                
                a++;
              Quizset();
            }
  
          },500);
         }
         
         else{
          
            modal2.classList.remove('hidden');
  
          answer.textContent = `「${item2.textContent}」 より「${item1.textContent}」のほうが古い。`;
  
          okay.addEventListener('click',()=>{
            modal2.classList.add('hidden');
            choice1.removeEventListener('click',event);
            
          });


          if(a > end-2 ){
            modal.classList.remove('hidden');
            count.textContent = ` 得点は ${cn} /${QuizBuild.length} です。`;

            close.addEventListener('click',()=>{
              location.reload();
          })
     
        }
          
          a++;
          Quizset();

          }
        };
  
        choice1.addEventListener('click',event,false);
                }


       checkAnswer();
  
  } 
  
}
