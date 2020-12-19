// Copyright 2020 Mayank Mathur

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var emojis = require('emojilib').lib;
var reverseMap = require('./ReverseMapper');
const { Builder, By, Key, until } = require('selenium-webdriver');

function pause(millisecs) {
    return new Promise(resolve => setTimeout(resolve, millisecs));
}
function getRandomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
}
function appendEmoji(word) {
    var emojiNameList = reverseMap[word];
    if (emojiNameList == undefined)
        return word;
    else
        return (word + ' ' + emojis[getRandomProperty(reverseMap[word])]['char']);
}

(async function main() {
    var driver = await new Builder().forBrowser('chrome').build();

    try {


        await driver.get("https://web.whatsapp.com");
        await pause(10000);

    } catch (e) {
        console.log("Error: ");
        console.log(e);
    } finally {
        console.log("Quitting now")
        driver.quit();
    }
})();