https://komodor.com/learn/how-to-fix-fatal-remote-origin-already-exists-error/

2. Update the Existing Remote’s URL
You are not always required to remove the origin handler from remote. An alternative way to solve fatal: remote origin already exists is to update the handler’s pointing URL.

To do this, you can use the set-url command, followed by the handler name (which is origin in our case) and the new URL.

Here is the syntax for updating an existing origin URL: git remote set-url origin [new-url]

Once this is completed, you can now push and pull code from the newly configured Git repository location.

3. Rename the Existing Remote
Alternatively, you can rename origin to something else. This means that instead of deleting the handler’s pointing URL to make room for the new one, you can rename it and keep the original details.

To do this, use the rename command on: remote.

For example, if you want to rename origin to dev, you can use the following command: git remote rename origin dev

Now when you run git remote -v, you will get dev as the handler instead of origin.

D:\GitHub\[some-repo]git remote -v
dev     https://github.com/some_repo/projectx.git (fetch)
dev     https://github.com/some_repo/projectx.git (push)  
This will give you room to add a new origin to the list of attached handlers. So when you run git remote add origin [url].git, you will no longer get the fatal: remote origin already exists error prompt.

How to prevent ‘fatal: remote origin already exists’
To prevent fatal: remote origin already exists error from occurring, you can check if the origin handler already exists. If it does not, running the git add remote origin command should not produce this issue.

The most important thing to note here is that origin is only a handler’s short name. It is a reference to the URL, which is where the actual remote repository is hosted.

The handler origin just happens to be the standardized default. This is what makes fatal: remote origin already exists so common. The error itself can occur against any handler, provided that it has the same placeholder name.

To check if origin even exists, run git remote -v to get a list of current remote handlers and the associated URLs.

If origin exists, you can do one of the following:

remove origin from the remote list via remove command, like so: git remote remove origin
update origin pointing URL with set-url, like so:git remote set-url origin [new-url]
rename the existing origin handler to something else via rename command: git remote rename origin [new-name]
We hope that the guide above helps you better understand the troubleshooting steps you need to take in order to fix the fatal: remote origin already exists error.

Keep in mind that this is just one of many Git errors that can pop up in your k8s logs and cause the system to fail. Due to the complex and distributed nature of k8s,
the search for the root cause of each such failure can be stressful, disorienting and time-consuming.

This is why we created Komodor, which acts as a single source of truth (SSOT) to streamline and shorten your k8s troubleshooting processes. Among other features, it offers:

Change intelligence: Every issue is a result of a change. Within seconds we can help you understand exactly who did what and when.
In-depth visibility: A complete activity timeline, showing all code and config changes, deployments, alerts, code diffs, pod logs and etc. All within one pane of glass with easy drill-down options.
Insights into service dependencies: An easy way to understand cross-service changes and visualize their ripple effects across your entire system.
Seamless notifications: Direct integration with your existing communication channels (e.g., Slack) so you’ll have all the information you need, when you need it.