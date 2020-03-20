import XRegExp from 'xregexp'
import { convertStringForIe } from './misc'
import { stringToDate } from 'common/generalUtil'

/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
/*
 * 0x0020-0x007F: ASCII
 * 0x3000-0x303F: Japanese-style punctuation
 * 0x3040-0x309F: Hiragana
 * 0x30A0-0x30FF: Katakana
 * 0xFF00-0xFFEF: Full-width roman characters and half-width katakana
 * 0x4E00-0x9FAF: CJK unified ideographs - Common and uncommon kanji
 * 0x3400-0x4DBF: CJK unified ideographs Extension A - Rare kanji
 * 0x20000-0x2A6DF: CJK unified ideographs Extension B - Very rare kanji
 */
export const japaneseEncodingSet = /[\u{0020}-\u{007F}]|[\u{3000}-\u{303F}]|[\u{3040}-\u{309F}]|[\u{30A0}-\u{30FF}]|[\u{FF00}-\u{FFEF}]|[\u{4E00}-\u{9FAF}]|[\u{3400}-\u{4DBF}]|[\u{20000}-\u{2A6DF}]/u

const controlCharacters = /(?!\u{000A}|\u{000D})[\u{0000}-\u{001F}]|\u{007F}/u
const halfWidthKatakana = /[\u{FF61}-\u{FF9F}]/u

/*
 * 0x2100-0x214F: Letterlike Symbols
 * 0x2150-0x218F: Number Forms
 * 0x2200-0x22FF: Mathematical Operators
 * 0x2460-0x24FF: Enclosed Alphanumerics
 * 0x3200-0x32FF: Enclosed CJK Letters and Months
 * 0x3300-0x33FF: CJK Compatibility
 * 0xE000-0xF8FF: Private Use Area
 */
const letterLike = /[\u{2100}-\u{214F}]/u
const numberForm = /[\u{2150}-\u{218F}]/u
const mathOperator = /[\u{2200}-\u{22FF}]/u
const enclosedAlphanumeric = /[\u{2460}-\u{24FF}]/u
const enclosedCjkLetter = /[\u{3200}-\u{32FF}]/u
const cjkCompatibility = /[\u{3300}-\u{33FF}]/u
const privateUseArea = /[\u{E000}-\u{F8FF}]/u

const rareKanjiSet = XRegExp(
  [
    '髜',
    '魵',
    '魲',
    '鮏',
    '鮱',
    '鮻',
    '鰀',
    '鵰',
    '鵫',
    '鶴',
    '鸙',
    '黑',
    '涖',
    '涬',
    '淏',
    '淸',
    '淲',
    '淼',
    '渹',
    '湜',
    '渧',
    '渼',
    '溿',
    '澈',
    '澵',
    '濵',
    '瀅',
    '瀇',
    '瀨',
    '炅',
    '炫',
    '焏',
    '焄',
    '煜',
    '煆',
    '煇',
    '凞',
    '燁',
    '燾',
    '犱',
    '犾',
    '猤',
    '猪',
    '獷',
    '玽',
    '珉',
    '珖',
    '珣',
    '珒',
    '琇',
    '珵',
    '琦',
    '琪',
    '琩',
    '琮',
    '瑢',
    '璉',
    '璟',
    '甁',
    '畯',
    '皂',
    '皜',
    '皞',
    '皛',
    '皦',
    '益',
    '睆',
    '劯',
    '砡',
    '硎',
    '硤',
    '硺',
    '礰',
    '礼',
    '神',
    '祥',
    '禔',
    '福',
    '禛',
    '竑',
    '竧',
    '靖',
    '竫',
    '箞',
    '精',
    '絈',
    '絜',
    '綷',
    '綠',
    '緖',
    '繒',
    '罇',
    '羡',
    '羽',
    '茁',
    '荢',
    '荿',
    '菇',
    '菶',
    '葈',
    '蒴',
    '蕓',
    '蕙',
    '蕫',
    '﨟',
    '薰',
    '蘒',
    '﨡',
    '蠇',
    '裵',
    '訒',
    '訷',
    '詹',
    '誧',
    '誾',
    '諟',
    '諸',
    '諶',
    '譓',
    '譿',
    '賰',
    '賴',
    '贒',
    '赶',
    '﨣',
    '軏',
    '﨤',
    '逸',
    '遧',
    '郞',
    '都',
    '鄕',
    '鄧',
    '釚',
    '釗',
    '釞',
    '釭',
    '釮',
    '釤',
    '釥',
    '鈆',
    '鈐',
    '鈊',
    '鈺',
    '鉀',
    '鈼',
    '鉎',
    '鉙',
    '鉑',
    '鈹',
    '鉧',
    '銧',
    '鉷',
    '鉸',
    '鋧',
    '鋗',
    '鋙',
    '鋐',
    '﨧',
    '鋕',
    '鋠',
    '鋓',
    '錥',
    '錡',
    '鋻',
    '﨨',
    '錞',
    '鋿',
    '錝',
    '錂',
    '鍰',
    '鍗',
    '鎤',
    '鏆',
    '鏞',
    '鏸',
    '鐱',
    '鑅',
    '鑈',
    '閒',
    '隆',
    '﨩',
    '隝',
    '隯',
    '霳',
    '霻',
    '靃',
    '靍',
    '靏',
    '靑',
    '靕',
    '顗',
    '顥',
    '飯',
    '飼',
    '餧',
    '館',
    '馞',
    '驎',
    '髙',
    'ⅰ',
    'ⅱ',
    'ⅲ',
    'ⅳ',
    'ⅴ',
    'ⅵ',
    'ⅶ',
    'ⅷ',
    'ⅸ',
    'ⅹ',
    'Ⅰ',
    'Ⅱ',
    'Ⅲ',
    'Ⅳ',
    'Ⅴ',
    'Ⅵ',
    'Ⅶ',
    'Ⅷ',
    'Ⅸ',
    'Ⅹ',
    '￢',
    '￤',
    '＇',
    '＂',
    '㈱',
    '№',
    '℡',
    '∵',
    '纊',
    '褜',
    '鍈',
    '銈',
    '蓜',
    '俉',
    '炻',
    '昱',
    '棈',
    '鋹',
    '曻',
    '彅',
    '丨',
    '仡',
    '仼',
    '伀',
    '伃',
    '伹',
    '佖',
    '侒',
    '侊',
    '侚',
    '侔',
    '俍',
    '偀',
    '倢',
    '俿',
    '倞',
    '偆',
    '偰',
    '偂',
    '傔',
    '僴',
    '僘',
    '兊',
    '兤',
    '冝',
    '冾',
    '凬',
    '刕',
    '劜',
    '劦',
    '勀',
    '勛',
    '匀',
    '匇',
    '匤',
    '卲',
    '厓',
    '厲',
    '叝',
    '﨎',
    '咜',
    '咊',
    '咩',
    '哿',
    '喆',
    '坙',
    '坥',
    '垬',
    '埈',
    '埇',
    '﨏',
    '塚',
    '增',
    '墲',
    '夋',
    '奓',
    '奛',
    '奝',
    '奣',
    '妤',
    '妺',
    '孖',
    '寀',
    '甯',
    '寘',
    '寬',
    '尞',
    '岦',
    '岺',
    '峵',
    '崧',
    '嵓',
    '﨑',
    '嵂',
    '嵭',
    '嶸',
    '嶹',
    '巐',
    '弡',
    '弴',
    '彧',
    '德',
    '忞',
    '恝',
    '悅',
    '悊',
    '惞',
    '惕',
    '愠',
    '惲',
    '愑',
    '愷',
    '愰',
    '憘',
    '戓',
    '抦',
    '揵',
    '摠',
    '撝',
    '擎',
    '敎',
    '昀',
    '昕',
    '昻',
    '昉',
    '昮',
    '昞',
    '昤',
    '晥',
    '晗',
    '晙',
    '晴',
    '晳',
    '暙',
    '暠',
    '暲',
    '暿',
    '曺',
    '朎',
    '朗',
    '杦',
    '枻',
    '桒',
    '柀',
    '栁',
    '桄',
    '棏',
    '﨓',
    '楨',
    '﨔',
    '榘',
    '槢',
    '樰',
    '橫',
    '橆',
    '橳',
    '橾',
    '櫢',
    '櫤',
    '毖',
    '氿',
    '汜',
    '沆',
    '汯',
    '泚',
    '洄',
    '涇',
    '浯',
    '猤',
    '猪',
    '獷',
    '玽',
    '珉',
    '珖',
    '珣',
    '珒',
    '琇',
    '珵',
    '琦',
    '琪',
    '琩',
    '琮',
    '瑢',
    '璟',
    '甁',
    '畯',
    '皂',
    '皜',
    '皞',
    '皛',
    '皦',
    '益',
    '睆',
    '劯',
    '砡',
    '硎',
    '硤',
    '硺',
    '礼',
    '神',
    '祥',
    '禔',
    '福',
    '禛',
    '竑',
    '竧',
    '靖',
    '竫',
    '箞',
    '精',
    '絈',
    '絜',
    '綷',
    '緖',
    '繒',
    '罇',
    '羡',
    '羽',
    '茁',
    '荢',
    '荿',
    '菇',
    '菶',
    '葈',
    '蒴',
    '蕓',
    '蕙',
    '﨟',
    '薰',
    '蘒',
    '﨡',
    '蠇',
    '裵',
    '訒',
    '訷',
    '詹',
    '誧',
    '誾',
    '諟',
    '諸',
    '諶',
    '譓',
    '賰',
    '賴',
    '贒',
    '赶',
    '﨣',
    '軏',
    '﨤',
    '逸',
    '遧',
    '郞',
    '都',
    '鄕',
    '鄧',
    '釚',
    '釗',
    '釭',
    '釮',
    '釤',
    '釥',
    '鈆',
    '鈐',
    '鈊',
    '鈺',
    '鉀',
    '鈼',
    '鉎',
    '鉙',
    '鉑',
    '鈹',
    '鉧',
    '鉷',
    '鉸',
    '鋧',
    '鋗',
    '鋙',
    '鋐',
    '﨧',
    '鋕',
    '鋠',
    '鋓',
    '錥',
    '錡',
    '鋻',
    '﨨',
    '錞',
    '錝',
    '錂',
    '鍰',
    '鍗',
    '鎤',
    '鏆',
    '鏞',
    '鏸',
    '鐱',
    '鑅',
    '鑈',
    '閒',
    '隆',
    '﨩',
    '隝',
    '霳',
    '霻',
    '靃',
    '靍',
    '靏',
    '靑',
    '靕',
    '顗',
    '顥',
    '飯',
    '飼',
    '餧',
    '館',
    '馞',
    '驎',
    '髜',
    '魵',
    '魲',
    '鮏',
    '鮱',
    '鮻',
    '鰀',
    '鵰',
    '鵫',
    '鶴',
    '鸙',
    '黑',
    'ⅰ',
    'ⅲ',
    'ⅳ',
    'ⅴ',
    'ⅵ',
    'ⅶ',
    'ⅷ',
    'ⅸ',
    'ⅹ',
    '￢',
    '￤',
    '＇',
    '＂',
    '褜',
    '鍈',
    '銈',
    '蓜',
    '俉',
    '炻',
    '昱',
    '棈',
    '鋹',
    '曻',
    '彅',
    '丨',
    '仡',
    '仼',
    '伀',
    '伹',
    '佖',
    '侒',
    '侊',
    '侚',
    '侔',
    '俍',
    '偀',
    '倢',
    '俿',
    '倞',
    '偆',
    '偰',
    '偂',
    '傔',
    '僘',
    '兊',
    '兤',
    '冝',
    '冾',
    '凬',
    '刕',
    '劜',
    '劦',
    '勀',
    '勛',
    '匀',
    '匇',
    '匤',
    '卲',
    '厲',
    '叝',
    '﨎',
    '咜',
    '咊',
    '咩',
    '哿',
    '喆',
    '坙',
    '坥',
    '垬',
    '埈',
    '埇',
    '﨏',
    '增',
    '墲',
    '夋',
    '奓',
    '奛',
    '奝',
    '奣',
    '妤',
    '妺',
    '孖',
    '寀',
    '甯',
    '寘',
    '寬',
    '尞',
    '岺',
    '峵',
    '崧',
    '嵓',
    '﨑',
    '嵂',
    '嵭',
    '嶸',
    '嶹',
    '巐',
    '弡',
    '弴',
    '彧',
    '德',
    '忞',
    '悅',
    '悊',
    '惞',
    '惕',
    '愠',
    '惲',
    '愑',
    '愷',
    '愰',
    '憘',
    '戓',
    '抦',
    '揵',
    '摠',
    '撝',
    '敎',
    '昀',
    '昕',
    '昻',
    '昉',
    '昮',
    '昞',
    '昤',
    '晥',
    '晗',
    '晙',
    '晴',
    '晳',
    '暙',
    '暠',
    '暿',
    '曺',
    '朎',
    '朗',
    '杦',
    '枻',
    '桒',
    '柀',
    '栁',
    '桄',
    '棏',
    '﨓',
    '楨',
    '﨔',
    '榘',
    '樰',
    '橫',
    '橆',
    '橳',
    '橾',
    '櫢',
    '櫤',
    '毖',
    '氿',
    '汜',
    '沆',
    '汯',
    '泚',
    '洄',
    '涇',
    '涖',
    '涬',
    '淏',
    '淸',
    '淲',
    '淼',
    '渹',
    '湜',
    '渧',
    '渼',
    '溿',
    '澈',
    '澵',
    '濵',
    '瀅',
    '瀨',
    '炅',
    '炫',
    '焏',
    '焄',
    '煜',
    '煆',
    '煇',
    '凞',
    '燁',
    '燾',
    '犱',
  ].join('|')
)

const specialCharacters = XRegExp(
  letterLike.source +
    '|' +
    numberForm.source +
    '|' +
    mathOperator.source +
    '|' +
    enclosedAlphanumeric.source +
    '|' +
    enclosedCjkLetter.source +
    '|' +
    cjkCompatibility.source +
    '|' +
    privateUseArea.source +
    '|' +
    rareKanjiSet.source
)

const excludedSet = XRegExp(
  controlCharacters.source +
    '|' +
    halfWidthKatakana.source +
    '|' +
    specialCharacters.source
)

const miscRegexSet = {
  halfWidthNumber: /^\d*$/u,
  halfWidthAlphanumericSymbol: /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/u,
  halfWidth: /^.*$/mu,
  fullWidth: /^[^\x01-\x7E]*$/u,
  fullWidthKana: /^[ぁ-んァ-ン]*$/u,
  date: {
    test: (input: string) => {
      if (input) {
        return (
          /^(\d{4}\/\d{1,2}\/\d{1,2})*$/u.test(input ? input : '') &&
          stringToDate(input) != null
        )
      }
      return true
    },
  },
  password: /^(?=.*?[a-z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,100}$/u,
  datetime: /^(\d{2}:\d{2})*$/u,
  postalCode: /^(\d{3}-?\d{4})*$/u,
  phoneNumber: /^(0\d{1,4}-?\d{1,4}-?\d{3,4})*$/u,
  flag: /^[0|1]*$/u,
}

export {
  excludedSet,
  controlCharacters,
  halfWidthKatakana,
  specialCharacters,
  miscRegexSet,
}
