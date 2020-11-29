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

// reverse map the descriptive keywords to the emojis
var reverseMap = {};
for (const [key, value] of Object.entries(emojis)) {
    var keywords = value["keywords"];
    for (const keyword of keywords) {
        reverseMap[keyword] = reverseMap[keyword] || [];
        reverseMap[keyword].push(key);
    }
}

module.exports = reverseMap;