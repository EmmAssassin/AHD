function ldb_aus()

indb_input('WA');
load WA;

d=selif(deaths, deaths(:, end)==1);
d=d(:,1:end-1);
p=selif(population, population(:, end)==1);
p=p(:,1:end-1);
births=selif(births, births(:, end)==1);
births=births(:,1:end-1);

clear deaths;
clear population;   

disp('split by rectangles');

d=d_ma0(d);

disp('split by triangles');
d=d_s1x1(d, births);


disp('open age interval');
d=d_soainew(d);


disp('distribution of unknown');
d=d_unk(d);



p=p_postcensal(p, d, births, [2017, 2017]);
p=p_precensal(p, d, [1971, 1971]);
p=p_my(p);
p=p_srecm(p, d);


ldb_output(d, p, 'mWA.txt', 'fWA.txt', births);
