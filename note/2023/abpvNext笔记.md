AutoAPI-不用写controller，框架直接用application层
配置步骤：
1. Configure中配置swagger
2. ConfigureServices配置options —— ConventionalControllers.Create(typeof(ApplicationModule).Assembly)
3. ApplicationService加上接口 IRemoteService
done.



