#!/bin/bash

# Set output directory to ./i18n
SCRIPT_DIR="./scripts"

# Example JSON content
UNUSED_JSON_CONTENT='{
    "CheckoutMainScreen.json": [
        "OrderSuccess::SubOrderList::ServiceTitle"
    ],
    "HahowPoint.json": [
        "COMPLETE_MEMBER_TASK_REWARD_POINTS::histTitle::DAILY_LOGIN_14",
        "COMPLETE_MEMBER_TASK_REWARD_POINTS::histTitle::DAILY_LOGIN_30",
        "COMPLETE_MEMBER_TASK_REWARD_POINTS::histTitle::DAILY_LOGIN_7",
        "COMPLETE_MEMBER_TASK_REWARD_POINTS::histTitle::DAILY_READ_ARTICLE",
        "COMPLETE_MEMBER_TASK_REWARD_POINTS::histTitle::DAILY_SIGN_IN",
        "COMPLETE_MEMBER_TASK_REWARD_POINTS::histTitle::DAILY_WATCH_LIVE_EVENT",
        "CONSECUTIVE_LOGINS_FOURTEEN_DAYS::message",
        "CONSECUTIVE_LOGINS_SEVEN_DAYS::message",
        "CONSECUTIVE_LOGINS_THIRTY_DAYS::message",
        "FIRST_LECTURE_FINISHED_REWARD_POINTS::message",
        "SIGNUP_REWARD_POINTS::message",
        "SIGNUP_REWARD_POINTS::title",
        "WEEKLY_TASK_REWARD_POINTS::histMessage",
        "WEEKLY_TASK_REWARD_POINTS::histTitle"
    ]
}'

MISSING_JSON_CONTENT='{
  "PointHistoryScreen.json": [
    "Close",
    "Thanks for your attendance of weekly task",
    "Weekly task::Start task",
    "Weekly task::Watch videos and answer questions",
    "Weekly task::Watch videos and answer questions to gain 1000 HP!",
    "Weekly task::Weekly task",
    "Weekly task::Weekly task rules"
  ],
  "components/Comment.json": [
    "CancelButtonText"
  ]
}'

# Write to missing-key.json
echo "$MISSING_JSON_CONTENT" > "$SCRIPT_DIR/missing-key.json"

# Write to unused-key.json
echo "$UNUSED_JSON_CONTENT" > "$SCRIPT_DIR/unused-key.json"

# Count keys in missing-key.json
MISSING_COUNT=$("$SCRIPT_DIR/count-keys.sh" "$SCRIPT_DIR/missing-key.json")
echo "Total keys in missing-key.json: $MISSING_COUNT"

# Count keys in unused-key.json
UNUSED_COUNT=$("$SCRIPT_DIR/count-keys.sh" "$SCRIPT_DIR/unused-key.json")
echo "Total keys in unused-key.json: $UNUSED_COUNT"

# Store results in key-stats.json
DATE=$(date +%F)
cat > "$SCRIPT_DIR/key-stats.json" <<EOF
{
  "date": "$DATE",
  "missingKeys": $MISSING_COUNT,
  "unusedKeys": $UNUSED_COUNT
}
EOF
echo "Key stats written to $SCRIPT_DIR/key-stats.json"
