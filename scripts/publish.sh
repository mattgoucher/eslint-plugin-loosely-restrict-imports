git config --global user.email "matt@mattgoucher.com"
git config --global user.name "Matt Goucher"

# Generate a release commit
./node_modules/.bin/standard-version patch -m "chore(release): version %s build ${CIRCLE_BUILD_NUM} [ci skip]"

# Push tags to github
git push --follow-tags origin ${CIRCLE_BRANCH}

# Publish to NPM
# npm publish
